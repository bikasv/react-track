import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import Routes from './routes';

let composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'RnP',
  });
}
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Routes store={store} />
  </Provider>,
  document.getElementById('root')
);
