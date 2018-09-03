import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import history from './history';
import reducer from '../reducers/index';
import { localStoreFN, loadState, saveState } from './localStorage.js';

const middleware = routerMiddleware(history);
const type = process.env.type;
let store;
let persistedState;
let localStorage = localStoreFN();

if(type === 'production'){
  store = createStore(
  combineReducers({
    reducer, /* preloadedState, */
    router: routerReducer,
  }),
  applyMiddleware(
      thunk,
      middleware
  ),
  );
}else if(type === 'development'){
  let composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  store = createStore(
  combineReducers({
    reducer, /* preloadedState, */
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      thunk,
      middleware),
  ));
}

export default store;