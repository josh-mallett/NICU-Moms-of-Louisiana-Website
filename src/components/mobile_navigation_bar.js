import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

const MobileNavigationBar = () => {
  return (
    <div className="mobile_navigation_bar">
      <div className="mobile_navigation_bar_content">
        <MobileNavigationMenu />
      </div>
    </div>
  );
}

const MobileNavigationMenu = () => {
  return (
    <div className="mobile_navigation_menu">
      <Scrollchor to="about"><li>ABOUT</li></Scrollchor>
      <Scrollchor to="news_resources"><li>NEWS</li></Scrollchor>
      <Scrollchor to="donate"><li>DONATE</li></Scrollchor>
      <Scrollchor to="contact"><li>CONTACT</li></Scrollchor>
    </div>
  );
}

module.exports = MobileNavigationBar;
