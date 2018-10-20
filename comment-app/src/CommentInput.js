import React , { Component } from 'react'

class CommentInput extends Component {
	  constructor (){
			super();
			this.state = {
					username:'',
					content : ''
			}
		}

		handleUserNameChange(e){
				this.setState({
					 username: e.target.value
				})
		}
		handleCommentChange(e){
				this.setState({
					 content: e.target.value
				})
		}
		handleSubmit(){
				 if ( this.props.onSubmit){
					 	 const {username,content} = this.state
						 this.props.onSubmit({username,content})
				 }
				 this.setState({content:''})
				 this.setState({username:''})
		}
		render() {
			return (
				<div>
					 <span>Username:</span>
					 <input type="text" value={this.state.username} onChange={this.handleUserNameChange.bind(this)}/>
					 <span>Comment</span>
					 <textarea value={this.state.content} onChange={this.handleCommentChange.bind(this)}/>
					 <button onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			)
		}
}

export default CommentInput
