require("./containers/map/main.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import rootReducer from './reducers';

import statesData from './containers/map/data/states-data';

const initialState = {
  regionData: statesData,
  emptyRegions: [],
  sortState: { key: 'regionName', direction: 'ASC' }
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#application'));
