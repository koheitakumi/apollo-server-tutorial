const { ApolloError } = require("apollo-server-express");
const { find } = require("lodash");
const { posts } = require("../data/testData");

const mutationResolvers = {
  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new ApolloError(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    },
  },
};

module.exports = mutationResolvers;
