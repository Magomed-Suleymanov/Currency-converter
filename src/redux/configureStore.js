import { createLogger } from 'redux-logger/src';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { currentCurrency } from './reducers/currentCurrency';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ currentCurrency }),
  applyMiddleware(thunk, logger),
);
