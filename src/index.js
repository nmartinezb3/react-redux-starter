import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from './containers/App';
import reducers from './reducers/index';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const initialState = {
  main: {}
}

let store = createStore(
	reducers,
	initialState,
  applyMiddleware(ReduxThunk, logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
