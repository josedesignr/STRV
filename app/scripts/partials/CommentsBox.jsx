import React from 'react';

export default class CommentsBox extends React.Component {
	render(){
		return(
			<div className="commentPanel posted">
				<img className="avatar inline" src={this.props.avatar}/>
				<div className="postInfo inline">
					<span>{this.props.name}</span>
					<br/>
					<small>{this.props.date}</small> 
					<img className="absolute" src="images/icons/reply-icn.svg"/>
				</div>

				<p>{this.props.comment}</p>
			</div>
		);
	}
}


