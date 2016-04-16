import {applyMiddleware, createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import counterReducer from './counterReducer'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';


const reducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
  form: formReducer
})


const logger = store => next => action => {
	console.log('dispatching', action.type, action)
	const result = next(action);
	console.log('next state', store.getState())
	return result;
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export default createStoreWithMiddleware(reducer)
