const newComment = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.comment(
      { },
      info,
    )
  },
}

const newVote = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.vote(
      { },
      info,
    )
  },
}

const newSkill = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.vote(
      { },
      info,
    )
  },
}

module.exports = {
  newComment,
  newVote,
  newSkill
}