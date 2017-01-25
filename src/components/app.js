import React, { Component } from 'react';
// custom components
import Nav from './nav';
import Footer from './footer';

import { Link, browserHistory } from 'react-router'

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Nav />
      <div>React simple starter</div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/chart">Foo</Link>
        {' '}
        <Link to="/table">Bar</Link>
      </header>
            <div>
        <button onClick={() => browserHistory.push('/chart')}>Go to /foo</button>
      </div>
      		<Footer />
      	</div>
    );
  }
}
