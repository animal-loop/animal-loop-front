import {
  FETCH_HOMOLOGATION_DRIVER_INIT,
  FETCH_HOMOLOGATION_DRIVER_SUCCESS,
  FETCH_HOMOLOGATION_DRIVER_FAILURE,
  SAVE_HOMOLOGATION_DRIVER_INIT,
  SAVE_HOMOLOGATION_DRIVER_SUCCESS,
  SAVE_HOMOLOGATION_DRIVER_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

/* Summary Fatigue */

function fetchApiSuccess(data) {
  return {
    type: FETCH_HOMOLOGATION_DRIVER_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_HOMOLOGATION_DRIVER_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_HOMOLOGATION_DRIVER_INIT,
  };
}

export function fetchHomologationDriverApi(group,tags) {
  return async (dispatch) => {
    dispatch(fetchApiInit());
    try {
      let data = await API.data.getAll(group, tags);
      dispatch(fetchApiSuccess(data));
    } catch (error) {
      dispatch(fetchApiFailure(error));
    }
  };
}

/* Homologation Save (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_HOMOLOGATION_DRIVER_SUCCESS,
    payloadSave: data,
    mensajeError: null,
    status: null
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_HOMOLOGATION_DRIVER_FAILURE,
    errorSave: error,
  };
}

function saveApiInit() {
  return {
    type: SAVE_HOMOLOGATION_DRIVER_INIT,
  };
}

export function handleHomologation(data) {
  return async (dispatch) => {
    dispatch(saveApiInit());
    try {
      const resp = await API.data.handleHomologation(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}