const resolverMap = {
  Query: {
    orgs: (_, { name }, { dataSources }) =>
      dataSources.githubAPI.getOrganization({ name }),
  },
};

module.exports = resolverMap;
