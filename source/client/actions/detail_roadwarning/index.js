import {
	FETCH_DETAIL_ROADWARNING_INIT,
 	FETCH_DETAIL_ROADWARNING_SUCCESS,
 	FETCH_DETAIL_ROADWARNING_FAILURE,
 } from './types';
 import API from './api';

 function fetchApiSuccess(data) {
 	return {
 		type: FETCH_DETAIL_ROADWARNING_SUCCESS,
 		payload: data,
 	};
 }

 function fetchApiFailure(error) {
 	console.log(error)
 	return {
 		type: FETCH_DETAIL_ROADWARNING_FAILURE,
 		payload: error,
 	};
 }

 function fetchApiInit() {
 	return {
 		type: FETCH_DETAIL_ROADWARNING_INIT,
 	};
 }

 export function fetchDetail_roadwarningApi(group,tags) {
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
