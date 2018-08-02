import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';

let composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'RnP',
  });
}
const enhancer = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
