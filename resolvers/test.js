const { AuthenticationError } = require("apollo-server-express");

const resolverMap = {
  Query: {
    tests: (_, __, { dataSources }) => dataSources.firestore.getTestData(),
  },

  Mutation: {
    add: async (_, { test: { id, name } }, { dataSources }) =>
      dataSources.firestore.addTestData({ id, name }),
  },
};

module.exports = resolverMap;
