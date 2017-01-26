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
import viewReducer from './reducer_views';

// imports our ActiveBook reducer
import ActiveView from './reducer_active_view';

const rootReducer = combineReducers({
	// this assigns the book key to our bookReducer function
	// where book is the key of the data state
	// and booksReducer is the value of that data state
	views: viewReducer,

	// assigns our key and value of the ActiveView reducer
	activeView: ActiveView,
	regionData,
	emptyRegions,
	sortState
});

export default rootReducer;
