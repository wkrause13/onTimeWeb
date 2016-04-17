import {
  REQUEST_SCHEDULE_SUBMIT,
  RECIEVE_SCHEDULE_SUBMIT,
  CHANGE_START,
} from '../actions/types';

export default (state = {
  startTime: new Date(),
}, action) => {
  switch (action.type) {
    case REQUEST_SCHEDULE_SUBMIT:
      console.log(action.payload);
      return state;
    case CHANGE_START:
      return Object.assign({}, state, {
        startTime: action.payload.toDate()
      });
    case RECIEVE_SCHEDULE_SUBMIT:
      return {
        status: 'LOGGED_IN',
        username: action.username,
      }
  }
  return state
}
