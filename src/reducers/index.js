import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {routerReducer} from 'react-router-redux';
import storageSession from 'redux-persist/lib/storage/session';

import userInfo from './userInfo/index';

let reducers = combineReducers ({
  userInfo,
  routing: routerReducer,
});

let config = {
  key: 'root',
  storage: storageSession,
};

export default persistReducer (config, reducers);
