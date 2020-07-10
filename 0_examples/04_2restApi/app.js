const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./schema");
let resolvers = require("./resolvers");

const GithubAPI = require("./datasources/githubApi");
const PokemonAPI = require("./datasources/pokemonApi");

// set up any dataSources our resolvers need
const dataSources = () => ({
  githubAPI: new GithubAPI(),
  pokemonAPI: new PokemonAPI(),
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema, dataSources });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
