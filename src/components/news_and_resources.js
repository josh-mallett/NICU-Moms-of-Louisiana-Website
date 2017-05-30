import React, { Component } from 'react';

const NewsResources = () =>  {
  return (
    <div id="news_resources" className="news_and_resources">
      <div className="news_and_resources_container">
        <News />
        <Resources />
      </div>
    </div>
  );
}

const News = () =>  {
  return (
    <div className="news nar">
      <h1>NEWS</h1>
      <FacebookFeed />
    </div>
  );
}

const Resources = () =>  {
  return (
    <div className="resources nar">
      <h1>RESOURCES</h1>
      <div className="chaplain">
        <div className="ryan_leblanc_headshot">
          <h2>CHAPLAIN RYAN LEBLANC</h2>
        </div>
        <div className="ryan_info">
          <p>
            Ryan offers one-on-one support for NICU Moms going through a tough time. If you are a mom that needs emotional support, or just someone to talk to during a tough time; Ryan is here for you.
            <br/>
            <br/>
            Ryan LeBlanc <br/>
            Ryanleblanc1982@gmail.com <br/>
            (318)508-2487
          </p>
        </div>
      </div>
    </div>
  );
}

const FacebookFeed = () =>  {
  return (
    <div>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnicumomsoflouisiana%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="400" height="500" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
    </div>
  );
}

module.exports =  NewsResources;
