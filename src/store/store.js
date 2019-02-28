import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const reducer = combineReducers({ ...reducers })

const initialState = {}

let store = createStore(
  reducer,
  initialState
)

export { store }
