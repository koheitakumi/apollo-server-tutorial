const { gql } = require("apollo-server-express");

module.exports = gql`
  type Orgs {
    id: ID!
    url: String
    repos_url: String
    avatar_url: String
    name: String
    blog: String
    public_repos: Int
    type: String
    created_at: String
    updated_at: String
  }

  type Query {
    gitHubOrgs: Orgs
  }
`;
