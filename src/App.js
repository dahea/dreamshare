import React, { Component } from 'react';

import Hero from './pages/Hero'
import How from './pages/How'
import Meet from './pages/Meet'
import Discover from './pages/Discover'
import Search from './pages/Search'

import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <How />
        <Meet />
        <Discover />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
