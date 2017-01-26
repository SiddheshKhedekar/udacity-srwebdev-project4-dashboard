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

// create the JS to hold the book data
function chartReducer() {
	
	// returns an array with our data
	return [
		{id:"1", data:[100,120,80,140,200,180, 100,120,80,140,200,180,100,120,80,140,200,180,100,120,80,140,200,180], name: 'paying customers', short:'pyc'},
		{id: "2", data:[2000,2400,1600,2800, 4000,3600,2000,2400,1600,2800, 4000,3600,2000,2400,1600,2800, 4000,3600,2000,2400,1600,2800, 4000,3600], name: 'reported issues', short:'ri'}
		];

}
export default chartReducer;