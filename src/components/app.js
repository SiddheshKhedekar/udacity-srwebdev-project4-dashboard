

import React, { Component } from 'react';

// custom components
import Nav from '../containers/nav';
import Footer from './footer';
import View from '../containers/view';
import ViewSelected from '../containers/view_selected';

export default class App extends Component {
  render() {
    return (
      <div>
      <Nav />
    	<main className="container">
      <View />
      <ViewSelected />
      <div>
      </div>

      </main>
      <Footer />
    </div>
    );
  }
}