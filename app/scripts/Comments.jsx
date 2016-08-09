import React from 'react';


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
          "Date": "4 days ago",
          "Comment": "I'm just testing the comment section. I really like this car. I especially like the fact that it only costs $3M. That's amazing.",
          "Replies": [
          {
            "Avatar": "../images/avatar-steven.png",
            "Name": "Steven",
            "Lastname": "Clayton",
            "Date": "4 days ago",
            "Reply": "Thanks Alfred. I'm glad you like it. We decided to release it with $3M price since this is our first STRV M6 car. We're still learning."
          }]
        },
        {
          "Avatar": "../images/avatar-jim.png",
          "Name": "Jim",
          "Lastname": "Lindsey",
          "Date": "5 days ago",
          "Comment": "Yeah! Attorney-client privilege. I mean, that's a big one. That's something I provide for you. If I give up Pinkman, well, then you're gonna be asking, Saul gives 'em up pretty easy. What's to keep him from giving me up?  Y'see, so, then where's the trust?",
          "Replies": []
        }]
      }
    }
  }



  render() {

  	var imgUrl = "../images/icons/icn-send.svg";
    var bgImage = {
      backgroundImage: 'url('+imgUrl+')'
    };

    var data = this.state.data.comments; 

    return (
    	<section id="comments" className="comments">
    		<div className="container">
      		<h3 className="numberSection">03</h3>
      		<h3 className="titleSection">COMMENTS</h3>
      		<div className="red-line hidden-xs"></div>

	        <div className="commentPanel">
	          	<img className="avatar" src="images/me.jpg"/>
	          	<div className="commentInput">
	            	<input type="text" placeholder="Write your comment here..."/>
	            	<button style={bgImage}></button>
	          	</div>
	        </div>

      		<div className="postedComments">

        			<h3>3 Comments</h3>

              <CommentsBox avatar={data[0].Avatar} name={data[0].Name+" "+data[0].Lastname} date={data[0].Date} comment={data[0].Comment} />
              <ReplyBox avatar={data[0].Replies[0].Avatar} name={data[0].Replies[0].Name+" "+data[0].Replies[0].Lastname} date={data[0].Replies[0].Date} comment={data[0].Replies[0].Reply} />
              <CommentsBox avatar={data[1].Avatar} name={data[1].Name+" "+data[1].Lastname} date={data[1].Date} comment={data[1].Comment} />


        			{/* This way is not needed anymore since I am feeding the Comments Box with props in the inner Component.
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