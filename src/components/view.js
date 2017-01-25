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
import Table from './table';

export default class View extends Component {
  render() {
    return (
      <div>
      <Nav />
    	<main className="container">
      <div>
		    <Map />
      </div>
      <Table />
      </main>
      <Footer />
    </div>
    );
  }
}