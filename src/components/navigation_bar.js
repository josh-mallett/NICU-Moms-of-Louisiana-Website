import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class NavigationBar extends Component {

  render() {
    return (
      <div className="navigation_bar">
        <div className="navigation_bar_content">
          <div className="navigation_email"><h3><a href="mailto:nicumomsofla@gmail.com" target="_blank">nicumomsofla@gmail.com</a></h3></div>
          <NavigationMenu />
        </div>
      </div>
    );
  }

}

class NavigationMenu extends Component {

  render() {
    return (
      <div className="navigation_menu">
        <Scrollchor to="about"><li>ABOUT</li></Scrollchor>
        <Scrollchor to="news_resources"><li>NEWS</li></Scrollchor>
        <Scrollchor to="donate"><li>DONATE</li></Scrollchor>
        <Scrollchor to="contact"><li>CONTACT</li></Scrollchor>
      </div>
    );
  }
}

module.exports = NavigationBar;
