import React, { Component } from 'react';

const HeaderWrapper = () => {
  return (
    <div className="header_wrapper">
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <MainLogo />
    </div>
  );
}

const MainLogo = () => {
  return (
    <div className="logo">
      <img src="./images/nicumoms_logo.png" alt=""/>
    </div>
  );
}

module.exports = HeaderWrapper;
