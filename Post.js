import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    const post = this.props.post
    return (
      <div className="single-post">
        <h3>{post.title}</h3>
        <p>{post.text}</p>
      </div>
    )
  }
}