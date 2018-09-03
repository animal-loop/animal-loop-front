import {
  FETCH_ACCOUNT_VEHICLE_INIT,
  FETCH_ACCOUNT_VEHICLE_SUCCESS,
  FETCH_ACCOUNT_VEHICLE_FAILURE,
  FETCH_ACCOUNT_VEHICLE_COUNT_INIT,
  FETCH_ACCOUNT_VEHICLE_COUNT_SUCCESS,
  FETCH_ACCOUNT_VEHICLE_COUNT_FAILURE,
  FETCH_ACCOUNT_VEHICLE_NO_LOADING_INIT,
  FETCH_ACCOUNT_VEHICLE_NO_LOADING_SUCCESS,
  FETCH_ACCOUNT_VEHICLE_NO_LOADING_FAILURE,
  SAVE_ACCOUNT_VEHICLE_INIT,
  SAVE_ACCOUNT_VEHICLE_SUCCESS,
  SAVE_ACCOUNT_VEHICLE_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

/* Account Vehicle */

function fetchApiSuccess(data) {
  return {
    type: FETCH_ACCOUNT_VEHICLE_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_ACCOUNT_VEHICLE_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_ACCOUNT_VEHICLE_INIT,
  };
}

export function fetchAccountVehicleApi(obj) {
  return async (dispatch) => {
    dispatch(fetchApiInit());
    try {
      let data = await API.data.getAll(obj);
      dispatch(fetchApiSuccess(data));
    } catch (error) {
      dispatch(fetchApiFailure(error));
    }
  };
}

/* Account Vehicle no loading */

function fetchApiNoLoadingSuccess(data,concat) {
  return {
    type: FETCH_ACCOUNT_VEHICLE_NO_LOADING_SUCCESS,
    payload: data,
    concat: concat
  };
}

function fetchApiNoLoadingFailure(error) {
  console.log(error)
  return {
    type: FETCH_ACCOUNT_VEHICLE_NO_LOADING_FAILURE,
    payload: error,
  };
}

function fetchApiNoLoadingInit() {
  return {
    type: FETCH_ACCOUNT_VEHICLE_NO_LOADING_INIT,
  };
}

export function fetchAccountVehicleNoLoadingApi(obj) {
  return async (dispatch) => {
    dispatch(fetchApiNoLoadingInit());
    try {
      let data = await API.data.getAll(obj);
      dispatch(fetchApiNoLoadingSuccess(data, obj.concat));
    } catch (error) {
      dispatch(fetchApiNoLoadingFailure(error));
    }
  };
}

/* Vehicle Save (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_ACCOUNT_VEHICLE_INIT,
    payloadSave: data,
    mensajeError: null,
    status: null
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_ACCOUNT_VEHICLE_SUCCESS,
    errorSave: error,
  };
}

function saveApiInit() {
  return {
    type: SAVE_ACCOUNT_VEHICLE_FAILURE,
  };
}

export function handleVehicle(data) {
  return async (dispatch) => {
    dispatch(saveApiInit());
    try {
      const resp = await API.data.handleVehicle(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}

/* Account Vehicle COUNT */

function fetchApiCountSuccess(data) {
  return {
    type: FETCH_ACCOUNT_VEHICLE_COUNT_SUCCESS,
    payload: data,
  };
}

function fetchApiCountFailure(error) {
  console.log(error)
  return {
    type: FETCH_ACCOUNT_VEHICLE_COUNT_FAILURE,
    payload: error,
  };
}

function fetchApiCountInit() {
  return {
    type: FETCH_ACCOUNT_VEHICLE_COUNT_INIT,
  };
}

export function fetchAccountVehicleCountApi(obj) {
  return async (dispatch) => {
    dispatch(fetchApiCountInit());
    try {
      let data = await API.data.getCount(obj);
      dispatch(fetchApiCountSuccess(data));
    } catch (error) {
      dispatch(fetchApiCountFailure(error));
    }
  };
}