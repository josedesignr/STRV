import React from 'react';


export default class HowItWorks extends React.Component {

  render() {

    return (
      	<section id="how-it-works" className="how-it-works no-repeat full-w">
      		<div className="container">
        		<h3 className="numberSection">02</h3>
        		<h3 className="titleSection">HOW IT WORKS</h3>
        		<div className="red-line hidden-xs"></div>
		        <div className="row auto">
		          	<div className="col-xs-12 col-sm-4 step relative">
		            	<h2 className="bold-xl">1</h2>
		            	<h4 className="absolute">Pick Your <br/> Favorite Designer</h4>
		          	</div>
		          	<div className="col-xs-12 col-sm-4 step relative">
		            	<h2 className="bold-xl">2</h2>
		            	<h4 className="absolute">Give Them $3M <br/> in a Fancy Suitcase</h4>
		          	</div>
		          	<div className="col-xs-12 col-sm-4 step relative no-border">
		            	<h2 className="bold-xl">3</h2>
		            	<h4 className="absolute no-border">Wait for the <br/> Masterpiece</h4>
		          	</div>
		        </div>
        		<button className="red-button">CHOOSE YOUR DESIGNER
          			<img src="images/icons/arrow-icn.svg"/>
        		</button>
        		<h2 className="watermark hidden-xs">STRV M6</h2>
        		<img className="hidden-xs block auto full-w" src="images/image-bmw.png"/>
      		</div>
    	</section>
    );
  }
}

  



