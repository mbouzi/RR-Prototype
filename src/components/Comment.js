import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.text}
        </div>
      </div>
    )
  }

  _voteForComment = async () => {
    // ... you'll implement this in chapter 6
  }
}

export default Comment