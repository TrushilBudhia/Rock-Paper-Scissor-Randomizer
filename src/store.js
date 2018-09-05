import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { randomNumber } from './reducers/randomNumber'

export const store = createStore(
  combineReducers({ number: randomNumber }), 
  applyMiddleware(thunk)
)