import {
  SAVE_LOGIN_INIT,
  SAVE_LOGIN_SUCCESS,
  SAVE_LOGIN_FAILURE,
  RESET_LOGIN,
  LOG_OUT
} from './types';
import API from './api';

/* Actions Creators */

export function resetLogin() {
  return {
    type: RESET_LOGIN,
  };
}

/* LOG_OUT */

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_LOGIN_SUCCESS,
    payloadSave: data,
    mensajeError: null,
    status: null
  };
}

function saveApiFailure(error) {
  return {
    type: SAVE_LOGIN_FAILURE,
    errorSave: error,
  };
}

function saveApiInit() {
  return {
    type: SAVE_LOGIN_INIT,
  };
}

export function saveLoginApi(data) {
  return async (dispatch) => {
    dispatch(saveApiInit());
    try {
      const resp = await API.data.save(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}