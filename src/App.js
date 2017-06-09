import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import NavigationBar from './components/navigation_bar';
import MobileNavigationBar from './components/mobile_navigation_bar';
import HeaderWrapper from './components/header';
import About from './components/about';
import NewsResources from './components/news_and_resources';
import Donate from './components/donations';
import Contact from './components/contact';

// Store is the overall state of the page and all of its components
const store = createStore(reducers);

// Provider allows everything wrapped inside of it to share props and store
class Main extends Component  {
  render() {
    return (
      <Provider store={store}>
        <div className="root">
          <NavigationBar />
          <MobileNavigationBar />
          <HeaderWrapper />
          <About />
          <NewsResources />
          <Donate />
          <Contact />
        </div>
      </Provider>
    );
  }
}

module.exports =  Main;
