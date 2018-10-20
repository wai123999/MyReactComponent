import React , { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component{
	render() {

			return (
					this.props.comment.map((comment,i) => {
								return	(
									<Comment comment={comment} key={i}/>
								)
						})

			)
	}
}

export default CommentList
