// =============================================================
// 
//  table.js
//
// =============================================================

import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
        <article className="card">
			<table id="tableShrunk" className="display " width="100%"></table>
			<table id="tableMain" className="display secondaryWidget" width="100%"></table>
        </article>
    );
  }
}