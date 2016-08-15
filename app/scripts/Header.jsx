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
    return this.state.navOpened ? 'nav-mobile transition-ease visible-xs to-left' : 'nav-mobile transition-ease visible-xs';
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
      <div className="header">

        <ul className="nav hidden-xs">
          {/*Here I am iterating over the Obj menu which is above; to generate the list menu*/}
          {Object.keys(menu).map( key =>
            <li key={menu[key]} className="nav__option bold inline"><a className="nav__option__link" href={menu[key]}>{key}</a></li>
          )}
        </ul>

        <img src="images/icons/icn-menu.png" className="header__icon visible-xs" onClick={this.toggleNavMenu.bind(this)}/>   
        
        <nav id="nav-mobile" className={this.getNavClass()}>
          <div style={posRelative}>
            <img src="images/icons/icn-close.png" className="nav-mobile__icon" onClick={this.toggleNavMenu.bind(this)}/>

            {/* Direct way to make menu
              <ul>
                <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#about-us">ABOUT US</a></li>
                <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#how-it-works">HOW IT WORKS</a></li>
                <li className="navOption"><a onClick={this.toggleNavMenu.bind(this)} href="#comments">COMMENT</a></li>
              </ul>
            */}

            <ul className="nav-mobile__options">
              {Object.keys(menu).map( key => <li key={menu[key]} className="nav-mobile__options__item"><a className="nav-mobile__options__item__link" onClick={this.toggleNavMenu.bind(this)} href={menu[key]}>{key}</a></li> )}
            </ul>

          </div>
        </nav>


        <h1 className="header__title">NEW STRV M6</h1>
        <h5 className="header__slogan">Simple Designy Car for Designers</h5>
    
        <button className="red-button">
          <a href="#comments" className="red-button__link">LEAVE A COMMENT</a>
          <img className="red-button__icon" src="images/icons/arrow-icn.svg"/>
        </button>

        <h2 className="header__watermark watermark hidden-xs hidden-sm">NEW STRV</h2>
      </div>
    );
  }
}

  
