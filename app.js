require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./schema");
let resolvers = require("./resolver");

const GithubAPI = require("./datasources/githubApi");
const PokemonAPI = require("./datasources/pokemonApi");
const UserDB = require("./datasources/userDb");
const Firestore = require("./datasources/firestore");

const { createStore } = require("./store");

const jwt = require("jsonwebtoken");

// creates a sequelize connection once. NOT for every request
const store = createStore();

// set up any dataSources our resolvers need
const dataSources = () => ({
  githubAPI: new GithubAPI(),
  pokemonAPI: new PokemonAPI(),
  userDB: new UserDB({ store }),
  firestore: new Firestore({ store }),
});

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }) => {
  let user = null;
  try {
    // const tokenName = process.env.JWT_TOKEN_NAME;
    // const token = req && req.cookies ? req.cookies[tokenName] : undefined;
    const token = (req.headers && req.headers.authorization) || "";
    // console.log("req.headers", req.headers);
    if (token) {
      user = jwt.verify(token, process.env.JWT_SECRET);
      console.log("user", user);
    }
  } catch (err) {
    console.log("Error", err);
  }
  return { req, user };
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

// In case of worker
const server = new ApolloServer({
  schema,
  dataSources,
  context,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
