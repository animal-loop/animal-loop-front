import {
  FETCH_DETAIL_FATIGUE_INIT,
  FETCH_DETAIL_FATIGUE_SUCCESS,
  FETCH_DETAIL_FATIGUE_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

/* Summary Fatigue */

function fetchApiSuccess(data) {
  return {
    type: FETCH_DETAIL_FATIGUE_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_DETAIL_FATIGUE_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_DETAIL_FATIGUE_INIT,
  };
}

export function fetchDetailFatigueApi(group,tags) {
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