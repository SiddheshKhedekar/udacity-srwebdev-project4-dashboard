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

// create the JS to hold the book data
function viewReducer() {
	
	// returns an array with our data
	return [

		{ component: <Map />, details:'These is the number and density of our employees across the US', filter:1, name:'map',},
		{ component: <Table />, details:'View a report on our most recent issues', filter:2, name:'table',},
		{ component: '', details:'Go through our charts reporting issues over time', filter:3, name:'chart', }


};

export default viewReducer;