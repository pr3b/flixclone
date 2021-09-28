import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import movie from './reducer'

const store = createStore(combineReducers({ movie }), composeWithDevTools())

export default store