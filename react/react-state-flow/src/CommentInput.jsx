import React, { Component } from 'react';
class CommentInput extends Component {
  state = {}
  handPublish = () => {
    const userName= this.refs.userName.nodeValue;
    const commentContent= this.refs.commentContent.nodeValue;
    console.log(userName,commentContent)
    const {onPublish} = this.props
    onPublish(userName,commentContent)
  }
  render() { 
    return (
      <div>
        用户名： <input type="text" ref="userName">
        评论内容： <textarea name="" ref="commentContent" id="" cols=""></textarea>
        <button onClick={this.handPublish}></button>
      </div>
    )
  }
}
 
export default CommentInput;
