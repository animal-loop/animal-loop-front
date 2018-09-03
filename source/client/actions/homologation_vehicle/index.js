import {
  FETCH_HOMOLOGATION_VEHICLE_INIT,
  FETCH_HOMOLOGATION_VEHICLE_SUCCESS,
  FETCH_HOMOLOGATION_VEHICLE_FAILURE,
  SAVE_HOMOLOGATION_VEHICLE_INIT,
  SAVE_HOMOLOGATION_VEHICLE_SUCCESS,
  SAVE_HOMOLOGATION_VEHICLE_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

/* Summary Fatigue */

function fetchApiSuccess(data) {
  return {
    type: FETCH_HOMOLOGATION_VEHICLE_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_HOMOLOGATION_VEHICLE_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_HOMOLOGATION_VEHICLE_INIT,
  };
}

export function fetchHomologationVehicleApi(group,tags) {
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
    type: SAVE_HOMOLOGATION_VEHICLE_SUCCESS,
    payloadSave: data,
    mensajeError: null,
    status: null
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_HOMOLOGATION_VEHICLE_FAILURE,
    errorSave: error,
  };
}

function saveApiInit() {
  return {
    type: SAVE_HOMOLOGATION_VEHICLE_INIT,
  };
}

export function handleHomologationVehicle(data) {
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