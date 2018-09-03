import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  FETCH_DASHBOARD_DATE_SUCCESS,
  FETCH_DASHBOARD_DATE_FAILURE,
  FETCH_DASHBOARD_DATE_INIT,
  RESET_DASHBOARD,
} from './types';
import API from './api';


export function resetDashboard() {
  return {
    type: RESET_DASHBOARD,
  };
}

/* Config setting */

function fetchApiSuccess(data) {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_DASHBOARD_FAILURE,
    error: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_DASHBOARD_INIT,
  };
}

export function fetchDashboardSettingApi(data) {
  return async (dispatch) => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.getSetting(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}

/* Config Max Date */

function fetchApiDateSuccess(data) {
  return {
    type: FETCH_DASHBOARD_DATE_SUCCESS,
    payload: data,
  };
}

function fetchApiDateFailure(error) {
  console.log(error)
  return {
    type: FETCH_DASHBOARD_DATE_FAILURE,
    error: error,
  };
}

function fetchApiDateInit() {
  return {
    type: FETCH_DASHBOARD_DATE_INIT,
  };
}

export function fetchDashboardDateApi(data) {
  return async (dispatch) => {
    dispatch(fetchApiDateInit());
    try {
      const resp = await API.data.getDate(data);
      return dispatch(fetchApiDateSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiDateFailure(error));
    }
  };
}
