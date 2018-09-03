import {
  FETCH_ACCOUNT_DRIVER_INIT,
  FETCH_ACCOUNT_DRIVER_SUCCESS,
  FETCH_ACCOUNT_DRIVER_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

/* Summary Fatigue */

function fetchApiSuccess(data) {
  return {
    type: FETCH_ACCOUNT_DRIVER_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_ACCOUNT_DRIVER_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_ACCOUNT_DRIVER_INIT,
  };
}

export function fetchAccountDriverApi(group,tags) {
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