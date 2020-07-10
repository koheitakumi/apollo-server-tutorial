const { mergeResolvers } = require("@graphql-tools/merge");
const gitHubResolver = require("./github");

const resolvers = [gitHubResolver];
module.exports = mergeResolvers(resolvers);
