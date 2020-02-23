import { createStore, combineReducers } from 'redux'
import { reducer as notifications } from 'react-notification-system-redux';
import reducers from './reducers'

const reducer = combineReducers({
  ...reducers,
  notifications
})

const initialState = {}

let store = createStore(
  reducer,
  initialState
)

export { store }
