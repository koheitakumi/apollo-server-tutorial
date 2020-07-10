require("dotenv").config();

const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 1000 * 2,
  });
}

function generateToken(user, secret) {
  const { id, email, name } = user; // Omit the password from the token
  const token = jwt.sign({ id, email, name }, secret, {
    expiresIn: "2h",
  }); //can also be 60 * 60 * 2
  return token;
}

const resolverMap = {
  Query: {
    user: (_, { email }, { dataSources }) =>
      dataSources.userDB.findUser({ email }),
  },
  Mutation: {
    signup: async (
      _,
      { user: { name, email, password } },
      { dataSources, req }
    ) => {
      try {
        const user = await dataSources.userDB.createUser({
          name,
          email,
          password,
        });
        const token = generateToken(user, process.env.JWT_SECRET);
        setCookie({
          tokenName: process.env.JWT_TOKEN_NAME,
          token,
          res: req.res,
        });

        return {
          token,
          user,
        };
      } catch (err) {
        throw new AuthenticationError(err);
      }
    },
    login: async (_, { user: { email, password } }, { dataSources, req }) => {
      try {
        const user = await dataSources.userDB.findUser({ email });
        if (!user) throw "No user in DB";

        // Use bcrypt to compare the provided password to 'hashed' password stored in database.
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw "Invalid password";

        const token = generateToken(user, process.env.JWT_SECRET);
        setCookie({
          tokenName: process.env.JWT_COOKIE_NAME,
          token,
          res: req.res,
        });

        return {
          token,
          user,
        };
      } catch (err) {
        throw new AuthenticationError(err);
      }
    },
    logout: async (_, __, { req }) => {
      try {
        req.res.clearCookie(process.env.JWT_COOKIE_NAME);
        return true;
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = resolverMap;
