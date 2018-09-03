import {
	FETCH_ACCOUNT_SETTING_INIT,
 	FETCH_ACCOUNT_SETTING_SUCCESS,
 	FETCH_ACCOUNT_SETTING_FAILURE,
 	SAVE_ACCOUNT_SETTING_INIT,
 	SAVE_ACCOUNT_SETTING_SUCCESS,
 	SAVE_ACCOUNT_SETTING_FAILURE,
 } from './types';
 import API from './api';

/* FECTH API SETTING */
 
 function fetchApiSuccess(data) {
 	return {
 		type: FETCH_ACCOUNT_SETTING_SUCCESS,
 		payload: data,
 	};
 }

 function fetchApiFailure(error) {
 	console.log(error)
 	return {
 		type: FETCH_ACCOUNT_SETTING_FAILURE,
 		payload: error,
 	};
 }

 function fetchApiInit() {
 	return {
 		type: FETCH_ACCOUNT_SETTING_INIT,
 	};
 }

 export function fetchAccountSettingApi(group,tags) {
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

 /* SAVE API FETCH */

  function saveApiSuccess(data) {
 	return {
 		type: SAVE_ACCOUNT_SETTING_SUCCESS,
 		payload: data,
 	};
 }

 function saveApiFailure(error) {
 	return {
 		type: SAVE_ACCOUNT_SETTING_FAILURE,
 		payload: error,
 	};
 }

 function saveApiInit() {
 	return {
 		type: SAVE_ACCOUNT_SETTING_INIT,
 	};
 }

  export function handleSetting(item) {
 	return async (dispatch) => {
 		dispatch(saveApiInit());
 		try {
 			let data = await API.data.handleSetting(item);
 			dispatch(saveApiSuccess(data));
 		} catch (error) {
 			dispatch(saveApiFailure(error));
 		}
 	};
 }
