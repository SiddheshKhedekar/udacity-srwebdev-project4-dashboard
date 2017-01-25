// =============================================================
// 
// 	reducers/index.js
//
// =============================================================

// this is a base reducer combiner for react-redux

import { combineReducers } from 'redux';


// import basic reducer
import RestaurantReducer from './reducer_restaurants';

// import map reducer

const rootReducer = combineReducers({
	restaurants: RestaurantReducer,

});

export default rootReducer;
