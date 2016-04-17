import {
  REQUEST_SCHEDULE_SUBMIT,
  RECIEVE_SCHEDULE_SUBMIT,
  CHANGE_START,
  CLEAR_SCHEDULE_FORM
} from './types';

import {change} from 'redux-form';

import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3000/';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const defaultGetConfig = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

function requestSubmit(props) {
  return {
    type: REQUEST_SCHEDULE_SUBMIT,
    payload: props,
  };
}

function receiveSubmit(payload) {
  return {
    type: RECIEVE_SCHEDULE_SUBMIT,
    payload,
    receivedAt: Date.now(),
  };
}

export function changeStartTimeChange(time){
  return {
    type: CHANGE_START,
    payload: time,
    receivedAt: Date.now(),
  };
}

export function clearSchedule(){
  return (dispatch) => {
    dispatch(change('ScheduleMeetingForm','amount',''));
    dispatch(change('ScheduleMeetingForm','startDate',new Date()  ));
    dispatch(change('ScheduleMeetingForm','time',''));
    dispatch(change('ScheduleMeetingForm','gracePeriod',''));

  }
}


export function submitSchedule(props) {
  return (dispatch) => {
    dispatch(requestSubmit(props));
  }
  // return (dispatch) => {
  //   dispatch(requestSubmit(props));
  //   return fetch(`${baseURL}/schedule`, defaultGetConfig)
  //     .then(response => response.json())
  //     .then(json =>
  //       dispatch(receiveSubmit(json))
  //   );
  // };
}
