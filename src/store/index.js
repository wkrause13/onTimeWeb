import {applyMiddleware, createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import railsReducer from './railsReducer'
import scheduleReducer from './scheduleReducer';
import meetingsReducer from './meetingsReducer';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
	auth: authReducer,
  form: formReducer,
	rails: railsReducer,
  scheduleReducer: scheduleReducer,
  meetingsReducer: meetingsReducer
})


const logger = store => next => action => {
	console.log('dispatching', action.type, action)
	const result = next(action);
	console.log('next state', store.getState())
	return result;
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export default createStoreWithMiddleware(reducer)
