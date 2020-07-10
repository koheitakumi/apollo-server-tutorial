const { mergeResolvers } = require("@graphql-tools/merge");
const gitHubResolver = require("./github");
const pokemonResolver = require("./pokemon");

const resolvers = [gitHubResolver, pokemonResolver];
module.exports = mergeResolvers(resolvers);
