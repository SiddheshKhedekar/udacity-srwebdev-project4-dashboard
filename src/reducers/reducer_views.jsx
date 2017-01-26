// =============================================================
// 
// 	reducer_books.js
//
// =============================================================
 
// more on reducers here : http://redux.js.org/docs/basics/Reducers.html
// in short, a reducer is a function that returns a piece of the application's state / model / data
// reducers produce the VALUE of our state
// good to keep in mind that each piece of the app should be named after the folder its in, to be concise
// 
// 
import React, { Component } from 'react';
import Map from '../containers/map/map';
import Table from '../components/Table';
import Charts from '../containers/charts/charts';

// create the JS to hold the book data
function viewReducer() {
	
	// returns an array with our data
	return [
		{ id:'1', component: <Table />, details:'View a report on our most recent issues', name:'table', active: '0', shortdesc:'most recent issues'},
		{ id:'2', component: <Map />, details:'These is the number and density of our employees across the US', name:'geomap', active: '0', shortdesc:'employee geospatial view'},
		{ id:'3', component: <Charts />, details:'Go through our charts reporting issues over time', name:'charts', active: '0', shortdesc:'charts with issue data'}
];

}
export default viewReducer;