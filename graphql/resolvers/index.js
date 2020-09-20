const postsResolvers = require("./post");
const usersResolvers = require("./user");
const commentsResolvers = require("./comments");
const likesResolvers = require("./likes");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },

  Query: {
    ...postsResolvers.Query,
  },

  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...likesResolvers.Mutation,
  },

  Subscription: {
    ...postsResolvers.Subscription,
  },
};
