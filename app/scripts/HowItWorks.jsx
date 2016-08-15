import React from 'react';


export default class HowItWorks extends React.Component {

  render() {

    var imgUrl = "images/bg-gray.png";
    var bgImage = {
      backgroundImage: 'url('+imgUrl+')'
    };

    return (
      <section id="how-it-works" className="how-it-works" style={bgImage}>
    		<div className="container">
          <h3 className="number-section">02</h3>
          <h3 className="title-section">HOW IT WORKS</h3>
          <div className="red-line hidden-xs"></div>
          <div className="how-it-works__steps">
              <div className="col-sm-4 step">
                <h2 className="step__title">1</h2>
                <h4 className="step__text">Pick Your <br/> Favorite Designer</h4>
              </div>
              <div className="col-sm-4 step">
                <h2 className="step__title">2</h2>
                <h4 className="step__text">Give Them $3M <br/> in a Fancy Suitcase</h4>
              </div>
              <div className="col-sm-4 step no-border">
                <h2 className="step__title">3</h2>
                <h4 className="step__text no-border">Wait for the <br/> Masterpiece</h4>
              </div>
          </div>
          <button className="red-button">CHOOSE YOUR DESIGNER
              <img className="red-button__icon" src="images/icons/arrow-icn.svg"/>
          </button>
          <h2 className="how-it-works__watermark watermark hidden-xs">STRV M6</h2>
          <img className="how-it-works__img hidden-xs" src="images/image-bmw.png"/>
        </div>
    	</section>
    );
  }
}

  



