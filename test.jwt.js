require("dotenv").config();

const jwt = require("jsonwebtoken");

function generateToken(user, secret) {
  const { id, email, name } = user; // Omit the password from the token
  const token = jwt.sign({ id, email, name }, secret, {
    expiresIn: "2h",
  }); //can also be 60 * 60 * 2
  return token;
}

console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);

const user = { id: 1, email: "takumi@emantle.net", name: "takumi" };
const token = generateToken(user, process.env.JWT_SECRET);
console.log("token", token);
