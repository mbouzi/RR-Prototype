function post(parent, args, context, info) {
  const { text } = args
  return context.db.mutation.createComment({ data: { text } }, info)
}

module.exports = {
  post,
}