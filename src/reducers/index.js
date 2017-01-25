// =============================================================
// 
// 	reducers/index.js
//
// =============================================================

import { combineReducers } from 'redux';

import sortState from '../containers/map/reducers/sortState';
import emptyRegions from '../containers/map/reducers/emptyRegions';
import regionData from '../containers/map/reducers/regionData';

const rootReducer = combineReducers({
  regionData,
  emptyRegions,
  sortState
});

export default rootReducer;
