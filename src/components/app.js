import React, { Component } from 'react';
// custom components
import Nav from './nav';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Nav />
      <div>React simple starter</div>
      
      		<Footer />
      	</div>
    );
  }
}
