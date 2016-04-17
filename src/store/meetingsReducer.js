import {
  REQUEST_MEETINGS,
  RECIEVE_MEETINGS
} from '../actions/types';

export default (state = {
  isLoading: false,
  meetings: []
}, action) => {
  switch (action.type) {
    case REQUEST_MEETINGS:
      return Object.assign({}, state, {
        isLoading: true
      });
      // console.log(action.payload);
      // return state;
    case RECIEVE_MEETINGS:
      
      return Object.assign({}, state, {meetings: action.payload});
    default:
      return state 
  }
}