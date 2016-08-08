import React from 'react';


export default class Header extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      navOpened: false
    };
  }

  toggleNavMenu() {
    this.setState({ navOpened: !this.state.navOpened });
  }

  getNavClass() {
    return this.state.navOpened ? 'visible-xs menu-is-open' : 'visible-xs';
  }

  render() {

    var posRelative = {
      position: 'relative'
    };

    var imgUrl = "../images/header.png";
    var bgImage = {
      backgroundImage: 'url('+imgUrl+')'
    };

    /* ---------- */
    /*
    var menuOpen = false;
    var classAssigned = "";

    var toggleClass = function(){
      if (menuOpen === false){
        menuOpen = true;
        classAssigned = "menu-is-open";
      }
      else{
        menuOpen = false;
        classAssigned = "";
      }
      console.log("Menu is open: "+menuOpen);
      console.log("Class assigned is: "+classAssigned);
    }
    */

    return (
      <div className="header" style={bgImage}>
      
        <ul className="navigationMenu hidden-xs">
          <li className="navOption"><a href="#about-us">ABOUT US</a></li>
          <li className="navOption"><a href="#how-it-works">HOW IT WORKS</a></li>
          <li className="navOption"><a href="#comments">COMMENT</a></li>
        </ul>
        
        <i className="glyphicon glyphicon-menu-hamburger visible-xs" onClick={this.toggleNavMenu.bind(this)}></i>
        
        <nav id="nav-mobile" className={this.getNavClass()}>
          <div style={posRelative}>
            <i className="glyphicon glyphicon-remove" onClick={this.toggleNavMenu.bind(this)}></i>
            <ul>
              <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#about-us">ABOUT US</a></li>
              <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#how-it-works">HOW IT WORKS</a></li>
              <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#comments">COMMENT</a></li>
            </ul>
          </div>
        </nav>


        <h1>NEW STRV M6</h1>
        <h5>Simple Designy Car for Designers</h5>
    
        <button className="red-button">LEAVE A COMMENT
          <img src="images/icons/arrow-icn.svg"/>
        </button>

        <h2 className="watermark hidden-xs hidden-sm">NEW STRV</h2>
      </div>
    );
  }
}

  
