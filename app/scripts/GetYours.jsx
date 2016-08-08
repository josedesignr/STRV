
import React from 'react';


export default class GetYours extends React.Component {

  render() {

    var imgUrl = "../images/footer.png";
    var bgImage = {
      backgroundImage: 'url('+imgUrl+')'
    };

    return (
    	<section className="get-yours" style={bgImage}>
      		<h1>Get Your STRV M6</h1>
      		<h5>Simple Designy Car for Designers</h5>

      		<button className="red-button">BUILD YOUR OWN
        		<img src="images/icons/arrow-icn.svg"/>
      		</button>

      		<footer>
        		<div>
          			<h6>SHARE ON</h6>
          			<img src="images/icons/icn-facebook.svg"/>
          			<img src="images/icons/icn-twitter.svg"/>
        		</div>
      		</footer>
    	</section>
    );
  }
}

  


