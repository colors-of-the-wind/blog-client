import { compose, createStore, applyMiddleware  } from 'redux'
import { persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'
import reducers from '../reducers'
import config from '../config'

let createHistory = createHashHistory;

if (config.env === 'production') {
  createHistory = createBrowserHistory;
}

const history = createHistory()

const routeMiddleware = routerMiddleware(history);

const middleware = [routeMiddleware, thunk];

const shouldCompose = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancers = shouldCompose ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const newCreateStore = composeEnhancers(applyMiddleware(...middleware))( createStore )

const store = newCreateStore(reducers)

const persist = persistStore(store)

window._store = store

export { persist, store }