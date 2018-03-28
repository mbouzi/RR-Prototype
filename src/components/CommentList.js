import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render() {
    const commentsToRender = [
      {
        id: '1',
        text: 'Prisma turns your database into a GraphQL API 😎 😎',
      },
      {
        id: '2',
        text :'The best GraphQL client',
      },
    ]

    return (
      <div>{commentsToRender.map(comment => <Comment key={comment.id} text={comment.text} />)}</div>
    )
  }
}

export default CommentList