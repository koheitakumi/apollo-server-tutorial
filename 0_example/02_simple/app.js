const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./schema");
let resolvers = require("./resolvers");
console.log("resolvers", resolvers);
const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
