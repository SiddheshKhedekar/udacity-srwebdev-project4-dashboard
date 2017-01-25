// =============================================================
// 
// 	view.js
//
// =============================================================

import React, { Component } from 'react';

// custom components
import Nav from './nav';
import Footer from './footer';
import Map from '../containers/map/map';

export default class View extends Component {
  render() {
    return (
      <div>
      <Nav />
    	<main className="container">
    	
      <div>React simple starter</div>
      <div>
		    <Map />
      </div>
      </main>
      <Footer />
    </div>
    );
  }
}