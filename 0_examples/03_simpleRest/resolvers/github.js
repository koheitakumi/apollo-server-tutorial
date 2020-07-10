const { fetch } = require("cross-fetch");

const resolverMap = {
  Query: {
    async gitHubOrgs() {
      // const response = await fetch(`https://api.github.com/repos/${args.name}`);
      const response = await fetch(`https://api.github.com/orgs/nodejs`);
      return response.json();
    },
  },
};

module.exports = resolverMap;
