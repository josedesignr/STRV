import React from 'react';

export default class ReplyBox extends React.Component {
	render(){
		return(
			<div className="comments__panel comments__posted__reply">
				<img className="avatar" src={this.props.avatar}/>
				<div className="comments__posted__info">
					<span className="comments__posted__info__name">{this.props.name}</span>
					<br/>
					<small className="comments__posted__info__date">{this.props.date}</small> 
				</div>
				<p className="comments__posted__text">{this.props.reply}</p>
			</div>
		);
	}
}