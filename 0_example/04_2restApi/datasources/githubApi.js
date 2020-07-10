const { RESTDataSource } = require("apollo-datasource-rest");
const { pick } = require("lodash");

class GithubAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com/";
  }

  async getOrganization({ name }) {
    const response = await this.get(`orgs/${name}`);
    return pick(response, [
      "id",
      "url",
      "repos_url",
      "avatar_url",
      "name",
      "blog",
      "public_repos",
      "type",
      "created_at",
      "updated_at",
    ]);
  }
}

module.exports = GithubAPI;
