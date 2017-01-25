// =============================================================
// 
// 	view.js
//
// =============================================================

import React, { Component } from 'react';

// custom components
import Nav from './nav';
import Footer from './footer';
import Map from './map';

export default class View extends Component {
  render() {
    return (
      <div>
      <Nav />
    	<main className="container">
      <div>
		    <Map />
      </div>
      </main>
      <Footer />
    </div>
    );
  }
}