import React, { PropTypes } from 'react';

import Header from './Header.jsx';
import AboutUs from './AboutUs.jsx';
import HowItWorks from './HowItWorks.jsx';
import Comments from './Comments.jsx';
import GetYours from './GetYours.jsx';

// Define the main App component
export default class App extends React.Component {

  render() {
    /*
     * Start your project here
     */
    return (
      <div>
        <Header/>
        <AboutUs/>
        <HowItWorks/>
        <Comments/>
        <GetYours/>
      </div>
    )
  }
}