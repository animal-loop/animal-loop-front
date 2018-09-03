import {
  FETCH_ASSIGNMENT_LIST_SETTING_INIT,
  FETCH_ASSIGNMENT_LIST_SETTING_SUCCESS,
  FETCH_ASSIGNMENT_LIST_SETTING_FAILURE,
  FETCH_ASSIGNMENT_LIST_INIT,
  FETCH_ASSIGNMENT_LIST_SUCCESS,
  FETCH_ASSIGNMENT_LIST_FAILURE,
} from './types';
import API from './api';

/* Assignment List Setting */

function fetchApiAssignmentListSuccess(data) {
  return {
    type: FETCH_ASSIGNMENT_LIST_SETTING_SUCCESS,
    payload: data,
  };
}

function fetchApiAssignmentListFailure(error) {
  console.log(error)
  return {
    type: FETCH_ASSIGNMENT_LIST_SETTING_FAILURE,
    payload: error,
  };
}

function fetchApiAssignmentListInit() {
  return {
    type: FETCH_ASSIGNMENT_LIST_SETTING_INIT,
  };
}

export function fetchAssignmentListApi(obj) {
  return async (dispatch) => {
    dispatch(fetchApiAssignmentListInit());
    try {
      let data = await API.data.getSetting(obj);
      dispatch(fetchApiAssignmentListSuccess(data));
    } catch (error) {
      dispatch(fetchApiAssignmentListFailure(error));
    }
  };
}

/* Assignment List */

function fetchApiAssignmentSuccess(data) {
  return {
    type: FETCH_ASSIGNMENT_LIST_SUCCESS,
    payload: data,
  };
}

function fetchApiAssignmentFailure(error) {
  console.log(error)
  return {
    type: FETCH_ASSIGNMENT_LIST_FAILURE,
    payload: error,
  };
}

function fetchApiAssignmentInit() {
  return {
    type: FETCH_ASSIGNMENT_LIST_INIT,
  };
}

export function fetchAssignmentApi(obj) {
  return async (dispatch) => {
    dispatch(fetchApiAssignmentInit());
    try {
      let data = await API.data.getAll(obj);
      dispatch(fetchApiAssignmentSuccess(data));
    } catch (error) {
      dispatch(fetchApiAssignmentFailure(error));
    }
  };
}