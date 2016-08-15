import React from 'react';


export default class AboutUs extends React.Component {

  render() {

    return (
		<section id="about-us" className="container about-us">
			<h3 className="number-section">01</h3>
			<h3 className="title-section">ABOUT US</h3>
			<h2 className="about-us__slogan">HANDMADE</h2>

			<div className="panel-features anchor-translate">
			  	<div className="panel-features__column col-lg-4">
			    	<img src="images/icons/brush.svg"/>
			    	<div className="panel-features__column__text-box">
			      		<h3 className="panel-features__column__text-box__title">Designed by <br/> 10 STRV Designers</h3>
			      		<p className="panel-features__column__text-box__text" >Every piece of this car is handmade. Our all 10 designers check Pinterest, Dribbble and Behance for inspirations and did this awesome car!</p>
			    	</div>
			  	</div>
			  	<div className="panel-features__column col-lg-4">
			    	<img src="images/icons/leaf.svg"/>
			    	<div className="panel-features__column__text-box">
			      		<h3 className="panel-features__column__text-box__title">Nature Handcraft <br/> Material</h3>
			      		<p className="panel-features__column__text-box__text">We using natural recycable materials like wood from our forest or co-operate with DannyP brand and his awesome leather stuff.</p>
			    	</div>
			  	</div>
			  	<div className="panel-features__column col-lg-4">
			    	<img src="images/icons/heart.svg"/>
			    	<div className="panel-features__column__text-box no-border">
			      		<h3 className="panel-features__column__text-box__title">Only 20 Pieces <br/> in the World!</h3>
			      		<p className="panel-features__column__text-box__text no-border">Designer is a human, right? Handmade things takes a lot of time and energy. Every designer have 2 cars in his pocket. So hurry up!</p>
			    	</div>
			  	</div>
			</div>    
		</section>
    );
  }
}





