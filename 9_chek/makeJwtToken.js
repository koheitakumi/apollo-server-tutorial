require("dotenv").config();

const jwt = require("jsonwebtoken");

function generateToken(user, secret) {
  const { id, email, name } = user;
  const token = jwt.sign({ id, email, name }, secret, {
    expiresIn: "2h",
  }); //can also be 60 * 60 * 2
  return token;
}

const user = { id: 1, email: "abc@abc.net", name: "john" };
const token = generateToken(user, process.env.JWT_SECRET);
console.log("token", token);
