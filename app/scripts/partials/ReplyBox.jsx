import React from 'react';

export default class ReplyBox extends React.Component {
	render(){
		return(
			<div className="commentPanel posted reply">
				<img className="avatar inline" src={this.props.avatar}/>
				<div className="postInfo inline">
					<span>{this.props.name}</span>
					<br/>
					<small>{this.props.date}</small> 
				</div>
				<p>{this.props.reply}</p>
			</div>
		);
	}
}