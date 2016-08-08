import React from 'react';

export default class Header extends React.Component {

  render() {

  	var imgUrl = "../images/icons/icn-send.svg";
    var bgImage = {
      backgroundImage: 'url('+imgUrl+')'
    };

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

          			<div className="commentPanel posted">
            			<img className="avatar" src="images/avatar-alfred.png"/>
            			<div className="postInfo">
              				<span>Alfred Henderson</span>
              				<br/>
              				<small>4 days ago</small> 
              				<img src="images/icons/reply-icn.svg"/>
            			</div>
            
            			<p>I’m just testing the comment section. I really like this car. I especially like the fact that it only costs $3M. That’s amazing.</p>
          			</div>

          			<div className="commentPanel posted reply">
            			<img className="avatar" src="images/avatar-steven.png"/>
            			<div className="postInfo">
              				<span>Alfred Henderson</span>
              				<br/>
              				<small>4 days ago</small> 
            			</div>
            
            			<p>Thanks Alfred. I’m glad you like it. We decided to release it with $3M price since this is our first STRV M6 car. We’re still learning.</p>
          			</div>

          			<div className="commentPanel posted">
            			<img className="avatar" src="images/avatar-jim.png"/>
            			<div className="postInfo">
              				<span>Alfred Henderson</span>
              				<br/>
              				<small>5 days ago</small>
              				<img src="images/icons/reply-icn.svg"/> 
            			</div>
            
            		<p>Yeah! Attorney-client privilege. I mean, that’s a big one. That’s something I provide for you. If I give up Pinkman, well, then you’re gonna be asking, Saul gives ‘em up pretty easy. What’s to keep him from giving me up?  Y’see, so, then where’s the trust?</p>
          		</div>
        	</div>
      	</div>
    </section>
    );
  }
}