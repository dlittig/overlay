import { createStore, combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  notifications,
});

const initialState = {};

const store = createStore(reducer, initialState);

/* eslint-disable-next-line import/prefer-default-export */
export { store };
