import {
  FETCH_SUMMARY_FATIGUE_INIT,
  FETCH_SUMMARY_FATIGUE_SUCCESS,
  FETCH_SUMMARY_FATIGUE_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

/* Summary Fatigue */

function fetchApiSuccess(data) {
  return {
    type: FETCH_SUMMARY_FATIGUE_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_SUMMARY_FATIGUE_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_SUMMARY_FATIGUE_INIT,
  };
}

export function fetchSummaryFatigueApi(group,tags) {
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