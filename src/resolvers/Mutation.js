const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId, getUserArray } = require('../utils')


function post(parent, args, context, info) {
  const userId = getUserId(context)
  const { text } = args
  return context.db.mutation.createComment(
    { data: { text, postedBy: { connect: { id: userId } } } },
    info,
  )
}

function importArtist(parent, args, context, info) {
  const userId = getUserId(context)
  const { image, name, age, description } = args
  return context.db.mutation.createArtist(
    { data: { image, name, age, description } },info,)
}


async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}



async function login(parent, args, context, info) {
  const user = await context.db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error(`Could not find user with email: ${args.email}`)
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context)
  const { commentId } = args
  const commentExists = await context.db.exists.Vote({
    user: { id: userId },
    comment: { id: commentkId },
  })
  if (commentExists) {
    throw new Error(`Already voted for comment: ${commentId}`)
  }

  return context.db.mutation.createVote(
    {
      data: {
        user: { connect: { id: userId } },
        comment: { connect: { id: commentId } },
      },
    },
    info,
  )
}

module.exports = {
  post,
  signup,
  login,
  vote,
  importArtist,
  pickArtist
}