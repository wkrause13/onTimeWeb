import {applyMiddleware, createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import scheduleReducer from './scheduleReducer';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import {
  CLEAR_SCHEDULE_FORM
} from '../actions/types'


const reducer = combineReducers({
	auth: authReducer,
  scheduleReducer: scheduleReducer,
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
