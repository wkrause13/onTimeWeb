import {applyMiddleware, createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
	auth: authReducer,
})


const logger = store => next => action => {
	console.log('dispatching', action.type, action)
	const result = next(action);
	console.log('next state', store.getState())
	return result;
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export default createStoreWithMiddleware(reducer)
