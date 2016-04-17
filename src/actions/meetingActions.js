import {
  REQUEST_MEETINGS,
  RECIEVE_MEETINGS
} from './types';

import fetch from 'isomorphic-fetch';

import { baseURL } from '../utils/utils';

const myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/json');

const defaultGetConfig = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

function requestMeetings() {
  return {
    type: REQUEST_MEETINGS
  };
}

function receiveMeetings(payload) {
  return {
    type: RECIEVE_MEETINGS,
    payload,
    receivedAt: Date.now(),
  };
}


export function fetchMeetings(props) {
  console.log(baseURL);
  return (dispatch) => {
    dispatch(requestMeetings());
    return fetch(`http://sheltered-brook-82719.herokuapp.com/meetings.json`, defaultGetConfig)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveMeetings(json))
    );
  };
}
