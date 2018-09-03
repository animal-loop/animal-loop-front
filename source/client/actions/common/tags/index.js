import {
  RESET_TAGS,
  FETCH_TAGS_INIT,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_TAG_FATIGUE_INIT,
  FETCH_TAG_FATIGUE_SUCCESS,
  FETCH_TAG_FATIGUE_FAILURE,
} from './types';
import API from './api';

export function resetTags() {
  return {
    type: RESET_TAGS,
  };
}

/*  Setting Filter  */
function fetchApiSuccess(data) {
  return {
    type: FETCH_TAGS_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  console.log(error)
  return {
    type: FETCH_TAGS_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_TAGS_INIT,
  };
}

export function fetchTagsApi(type) {
  return async (dispatch) => {
    dispatch(fetchApiInit());
    try {
      let data = await API.data.getAll(type);
      dispatch(fetchApiSuccess(data));
    } catch (error) {
      dispatch(fetchApiFailure(error));
    }
  };
}

/*  Main tags -> Agrupación  */
function fetchApiTagFatigueSuccess(data) {
  return {
    type: FETCH_TAG_FATIGUE_SUCCESS,
    payload: data,
  };
}

function fetchApiTagFatigueFailure(error) {
  console.log(error)
  return {
    type: FETCH_TAG_FATIGUE_FAILURE,
    payload: error,
  };
}

function fetchApiTagFatigueInit() {
  return {
    type: FETCH_TAG_FATIGUE_INIT,
  };
}

export function fetchTagsFatigueMainApi(obj) {
  return async (dispatch) => {
    dispatch(fetchApiTagFatigueInit());
    try {
      let data = await API.dataMain.getMain(obj);
      dispatch(fetchApiTagFatigueSuccess(data));
    } catch (error) {
      dispatch(fetchApiTagFatigueFailure(error));
    }
  };
}
