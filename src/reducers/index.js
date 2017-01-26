// =============================================================
// 
// 	reducers/index.js
//
// =============================================================

import { combineReducers } from 'redux';

import sortState from '../containers/map/reducers/sortState';
import emptyRegions from '../containers/map/reducers/emptyRegions';
import regionData from '../containers/map/reducers/regionData';

// imports the data from reducer_books.js
import RestaurantReducer from './reducer_restaurants';

// imports our ActiveBook reducer
import ActiveRestaurant from './reducer_active_restaurant';

const rootReducer = combineReducers({
	// this assigns the book key to our bookReducer function
	// where book is the key of the data state
	// and booksReducer is the value of that data state
	restaurants: RestaurantReducer,

	// assigns our key and value of the ActiveBook reducer
	activeRestaurant: ActiveRestaurant,
	regionData,
	emptyRegions,
	sortState
});

export default rootReducer;
