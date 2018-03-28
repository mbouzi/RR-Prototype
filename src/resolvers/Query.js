function feed(parent, args, context, info) {
  const { filter, first, skip } = args // destructure input arguments
  const where = filter
    ? { OR: [{ text: filter }] }
    : {}

  return context.db.query.comments({ first, skip, where }, info)
}

module.exports = {
  feed,
}

function list(parent, args, context, info) {
  const { filter, first, skip } = args // destructure input arguments
  const where = filter
    ? { OR: [{ name: filter }] }
    : {}

  return context.db.query.artists({ first, skip, where }, info)
}

module.exports = {
  feed,
  list
}