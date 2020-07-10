const { find, filter } = require("lodash");
const { posts, authors } = require("../data/testData");

const queryResolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
  },

  Author: {
    posts: (author) => filter(posts, { authorId: author.id }),
  },

  Post: {
    author: (post) => find(authors, { id: post.authorId }),
  },
};

module.exports = queryResolvers;
