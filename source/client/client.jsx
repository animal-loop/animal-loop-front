import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store from './store/store';
import history from './store/history';
import Routes from '../router/Routes';

hydrate(
  <Provider store={store}>
	    <Router>
	      <Routes />
	    </Router>
  </Provider>,
  document.getElementById('app'),
);
