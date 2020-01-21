import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import asyncStorage from '@react-native-community/async-storage'
import {AsyncStorage} from 'react-native';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const logger = createLogger({});

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, promiseMiddleware),
);
const persistor = persistStore(store);
export {store, persistor};
