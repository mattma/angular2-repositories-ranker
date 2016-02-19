import {Injectable} from 'angular2/core';
import {compose, createStore, applyMiddleware} from 'redux';

import {BaseStore} from './base-store';
import Reducers from './reducers';

const isDevMode: boolean = ('development' === process.env.NODE_ENV);
// Create ONLY one store per application
let store: any;

// map the `createStore` method, could be rewrite in DevMode
let cs: any = createStore;

if (isDevMode) {
  const createLogger = require('redux-logger');

  // log only in dev mode
  const logger = createLogger({
    predicate: (getState, action) => isDevMode
  });

  // createStoreWithMiddleware
  cs = applyMiddleware(logger)(cs);
}

const createPersistentStore: any = compose(cs);
store = createPersistentStore(Reducers);

@Injectable()
export class AppStore extends BaseStore {
  constructor() {
    super(store);
  }
}
