import React from 'react';

export default class CommentsBox extends React.Component {
	render(){
		return(
			<div className="comments__panel">
				<img className="avatar" src={this.props.avatar}/>
				<div className="comments__posted__info">
					<span className="comments__posted__info__name">{this.props.name}</span>
					<br/>
					<small className="comments__posted__info__date">{this.props.date}</small> 
					<img className="comments__posted__info__icon" src="images/icons/reply-icn.svg"/>
				</div>

				<p className="comments__posted__text">{this.props.comment}</p>
			</div>
		);
	}
}


