import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './css/bootstrap.min.css'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
//  import React from 'react';
//  import ReactDOM from 'react-dom';
//  import { createStore, applyMiddleware } from 'redux'
//  import { Provider } from 'react-redux'
//  import createLogger from 'redux-logger'
//  import thunk from 'redux-thunk'
//  import Route from './config/Route';
//  import reducer from './reducer'
//
//  const middleware = [ thunk ]
//  if (process.env.NODE_ENV !== 'production') {
//  middleware.push(createLogger())
//  }
//
//  const store = createStore(
//  reducer,
//  applyMiddleware(...middleware)
//  )
//  ReactDOM.render(
//  <Provider store={store}>
//  {Route}
//  </Provider>,
//  document.getElementById('root')
//  );
