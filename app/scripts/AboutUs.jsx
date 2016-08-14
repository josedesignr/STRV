import React from 'react';


export default class AboutUs extends React.Component {

  render() {

    return (
      	<div className="container">
			<div id="about-us" className="aboutUs relative">
				<h3 className="numberSection">01</h3>
				<h3 className="titleSection">ABOUT US</h3>
				<h2 className="bold-xl center">HANDMADE</h2>

				<div className="panelFeatures absolute bg-white clearfix">
				  	<section className="col-xs-12 col-lg-4 center no-padding">
				    	<img src="images/icons/brush.svg"/>
				    	<div>
				      		<h3>Designed by <br/> 10 STRV Designers</h3>
				      		<p className="thin" >Every piece of this car is handmade. Our all 10 designers check Pinterest, Dribbble and Behance for inspirations and did this awesome car!</p>
				    	</div>
				  	</section>
				  	<section className="col-xs-12 col-lg-4 center no-padding">
				    	<img src="images/icons/leaf.svg"/>
				    	<div>
				      		<h3>Nature Handcraft <br/> Material</h3>
				      		<p className="thin">We using natural recycable materials like wood from our forest or co-operate with DannyP brand and his awesome leather stuff.</p>
				    	</div>
				  	</section>
				  	<section className="col-xs-12 col-lg-4 center no-padding">
				    	<img src="images/icons/heart.svg"/>
				    	<div className="no-border">
				      		<h3>Only 20 Pieces <br/> in the World!</h3>
				      		<p className="thin no-border">Designer is a human, right? Handmade things takes a lot of time and energy. Every designer have 2 cars in his pocket. So hurry up!</p>
				    	</div>
				  	</section>
				</div>    
			</div>
		</div>
    );
  }
}





