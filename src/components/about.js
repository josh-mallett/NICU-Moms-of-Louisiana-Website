import React, { Component } from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <AboutPanels />
    </div>
  );
}

const AboutPanels = () =>  {
  return(
    <div className="about_panels">
      <div className="about_panel text_panel">
        <div className="about_icon mi"><h1>OUR MISSION</h1></div>
        <div className="about_text mission_text">
          <p>
            To provide support and resources to moms with babies in the NICU and beyond.
            We offer information and compassion while picking each other up when
            we are down. It doesn't matter how big or small the problem may seem,
            we want Louisiana NICU moms to know they are not alone.
          </p>
        </div>
      </div>
      <div className="about_panel">
        <div className="video">
          <iframe  src="https://www.youtube.com/embed/2CuoFHC9aMM" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div className="about_panel text_panel">
        <div className="about_icon ai"><h1>OUR STORY</h1></div>
        <div className="about_text story_text">
          <p>
            While in the NICU for 10 months with her daughter, Kayla Berken found an outcry
            for support from other moms going through similar experiences. While in the NICU
            at WCH in Lafayette, she connected with a few moms via Facebook. There she created NICU
            Moms of Louisiana, and found that the group began to grow and have a positive impact on the
            moms of the group. Her goal is to get all NICU moms the support they need in this difficult time.
            Her hope is to someday connect as many NICU moms with each other as possible, so that
            we can all hold each other's hands, hearts, and hopes.
          </p>
        </div>
      </div>
    </div>
  );
}

module.exports =  About;
