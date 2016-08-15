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
    return this.state.navOpened ? 'fixed bg-white to-top full-w full-h transition-ease visible-xs to-left' : 'fixed bg-white to-top full-w full-h transition-ease visible-xs';
  }

  render() {

    var posRelative = {
      position: 'relative'
    };

    const menu = {
      "ABOUT US" : "#about-us",
      "HOW IT WORKS": "#how-it-works",
      "COMMENT": "#comments"
    }

    return (
      <div className="header no-border relative no-repeat no-padding">

        <ul className="navigationMenu hidden-xs center no-margin">
          {/*Here I am iterating over the Obj menu which is above; to generate the list menu*/}
          {Object.keys(menu).map( key =>
            <li key={menu[key]} className="navOption bold inline"><a href={menu[key]}>{key}</a></li>
          )}
        </ul>

        <i className="glyphicon glyphicon-menu-hamburger visible-xs absolute white cursor-hand" onClick={this.toggleNavMenu.bind(this)}></i>
        
        <nav id="nav-mobile" className={this.getNavClass()}>
          <div style={posRelative}>
            <i className="glyphicon glyphicon-remove black" onClick={this.toggleNavMenu.bind(this)}></i>

            {/* Direct way to make menu
              <ul>
                <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#about-us">ABOUT US</a></li>
                <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#how-it-works">HOW IT WORKS</a></li>
                <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#comments">COMMENT</a></li>
              </ul>
            */}

            <ul className="center no-margin no-padding">
              {Object.keys(menu).map( key => <li key={menu[key]} className="navOption"><a className="black bold" onClick={this.toggleNavMenu.bind(this)} href={menu[key]}>{key}</a></li> )}
            </ul>

          </div>
        </nav>


        <h1>NEW STRV M6</h1>
        <h5>Simple Designy Car for Designers</h5>
    
        <button className="red-button">LEAVE A COMMENT
          <img src="images/icons/arrow-icn.svg"/>
        </button>

        <h2 className="watermark hidden-xs hidden-sm to-bottom absolute">NEW STRV</h2>
      </div>
    );
  }
}

  
