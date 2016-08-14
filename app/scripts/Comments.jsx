import React from 'react';

var moment = require('moment');

import CommentsBox from "./partials/CommentsBox";
import ReplyBox from "./partials/ReplyBox";

export default class Comments extends React.Component {


  constructor(){
    super();
    this.state = {
      data: {
        "comments":[
        {
          "Avatar": "../images/avatar-alfred.png",
          "Name": "Alfred",
          "Lastname": "Henderson",
          "Date": "04 Aug 2016",
          "Comment": "I'm just testing the comment section. I really like this car. I especially like the fact that it only costs $3M. That's amazing.",
          "Replies": [
          {
            "Avatar": "../images/avatar-steven.png",
            "Name": "Steven",
            "Lastname": "Clayton",
            "Date": "04 Aug 2016",
            "Reply": "Thanks Alfred. I'm glad you like it. We decided to release it with $3M price since this is our first STRV M6 car. We're still learning."
          }]
        },
        {
          "Avatar": "../images/avatar-jim.png",
          "Name": "Jim",
          "Lastname": "Lindsey",
          "Date": "03 Aug 2016",
          "Comment": "Yeah! Attorney-client privilege. I mean, that's a big one. That's something I provide for you. If I give up Pinkman, well, then you're gonna be asking, Saul gives 'em up pretty easy. What's to keep him from giving me up?  Y'see, so, then where's the trust?",
          "Replies": []
        }]
      },
      currentComment: ""
    }
  }


  handleChange(sentence){
    var comment = sentence.target.value;
    this.setState({ currentComment: comment });
    console.log(comment);
  }

  addComment(){
    if (this.state.currentComment !== ""){
      var objToAdd = {
        "Avatar": "../images/me.jpg",
        "Name": "Álvaro José",
        "Lastname": "Solís",
        "Date": moment().format("DD MMM YYYY"),
        "Comment": "",
        "Replies": []
      }
      objToAdd.Comment = this.state.currentComment;

      this.state.data.comments.unshift(objToAdd);

      this.setState({ currentComment: ""});
    }
  }

  render() {

  	var imgUrl = "../images/icons/icn-send.svg";
    var bgImage = {
      backgroundImage: 'url('+imgUrl+')'
    };

    {/*This var is just to avoid writing this.state.data.comments each time, it refers to comments array*/}
    var data = this.state.data.comments; 

    {/*Then, I give that array to a map funtion, to iterate over the existing comments and draw a CommentBox Component for each item found. (equivalent to ngRepeat)*/}

    var listComments = [];
    for (var i=0; i < data.length; i++) {
        listComments.push( <CommentsBox key={"comment"+i} avatar={data[i].Avatar} name={data[i].Name+" "+data[i].Lastname} date={data[i].Date} comment={data[i].Comment} />);
        
        var replies = data[i].Replies;
        if(replies.length > 0){
          for (var j=0; j< replies.length; j++){
            listComments.push(<ReplyBox key={"reply"+j} avatar={replies[j].Avatar} name={replies[j].Name+" "+replies[j].Lastname} date={replies[j].Date} reply={replies[j].Reply} />);
          }
        }
    }

    return (
    	<section id="comments">
    		<div className="container">
      		<h3 className="numberSection">03</h3>
      		<h3 className="titleSection">COMMENTS</h3>
      		<div className="red-line hidden-xs"></div>

	        <div className="commentPanel">
	          	<img className="avatar inline" src="images/me.jpg"/>
	          	<div className="commentInput center absolute">
	            	<input className="no-border thin" type="text" placeholder="Write your comment here..." value={this.state.currentComment} onChange={ this.handleChange.bind(this) } />
	            	<button className="no-border" style={bgImage} onClick={ this.addComment.bind(this) }></button>
	          	</div>
	        </div>

      		<div className="postedComments auto">

        			<h3 className="thin">{data.length} Comments</h3>
              
              {/*listComments is populated above the render function*/}
              {listComments}


        			{/* This way is not needed anymore since I am iterating above to generate the Comments Boxes.
              <div className="commentPanel posted">
          			<img className="avatar" src="images/avatar-alfred.png"/>
          			<div className="postInfo">
            				<span>{comments[0].Name} {comments[0].Lastname}</span>
            				<br/>
            				<small>{comments[0].Date}</small> 
            				<img src="images/icons/reply-icn.svg"/>
          			</div>
          
          			<p>{comments[0].Comment}</p>
        			</div>

        			<div className="commentPanel posted reply">
          			<img className="avatar" src="images/avatar-steven.png"/>
          			<div className="postInfo">
            				<span>{comments[0].Replies[0].Name} {comments[0].Replies[0].Lastname}</span>
            				<br/>
            				<small>{comments[0].Replies[0].Date}</small> 
          			</div>
          
          			<p>{comments[0].Replies[0].Reply}</p>
        			</div>

        			<div className="commentPanel posted">
          			<img className="avatar" src="images/avatar-jim.png"/>
          			<div className="postInfo">
            				<span> {comments[1].Name} {comments[1].Lastname} </span>
            				<br/>
            				<small>{comments[1].Date}</small>
            				<img src="images/icons/reply-icn.svg"/> 
          			</div>
          
          		  <p>{comments[1].Comment}</p>
        		  </div>
              */}
            </div>
      	</div>
      </section>
    );
  }
}