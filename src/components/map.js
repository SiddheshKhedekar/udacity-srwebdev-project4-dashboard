// =============================================================
// 
// 	view.js
//
// =============================================================

import React, { Component } from 'react';

import Map from '../containers/map/map';

export default class MapImport extends Component {
  render() {
    return (
    	<article className="card animated fadeIn">
 			<Map />
      	</article>
    );
  }
}