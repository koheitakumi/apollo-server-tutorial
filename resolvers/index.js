const { mergeResolvers } = require("@graphql-tools/merge");
const gitHubResolver = require("./github");
const pokemonResolver = require("./pokemon");
const userResolver = require("./user");

const resolvers = [gitHubResolver, pokemonResolver, userResolver];
module.exports = mergeResolvers(resolvers);
