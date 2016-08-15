
import React from 'react';


export default class GetYours extends React.Component {

  render() {

    return (
    	<section className="get-yours no-repeat full-w relative">
      		<h1 className="get-yours__title">Get Your STRV M6</h1>
      		<h5>Simple Designy Car for Designers</h5>

      		<button className="red-button">BUILD YOUR OWN
        		<img className="red-button__icon" src="images/icons/arrow-icn.svg"/>
      		</button>

      		<footer className="footer absolute bg-black full-w to-bottom">
        		<div className="center">
          			<h6 className="footer__text inline center bold white no-margin">SHARE ON</h6>
          			<img className="footer__icon" src="images/icons/icn-facebook.svg"/>
          			<img className="footer__icon" src="images/icons/icn-twitter.svg"/>
        		</div>
      		</footer>
    	</section>
    );
  }
}

  


