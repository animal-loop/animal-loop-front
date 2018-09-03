import {
	FETCH_SUMMARY_SUMMARY_INIT,
 	FETCH_SUMMARY_SUMMARY_SUCCESS,
 	FETCH_SUMMARY_SUMMARY_FAILURE,
 } from './types';
 import API from './api';

 function fetchApiSuccess(data) {
 	return {
 		type: FETCH_SUMMARY_SUMMARY_SUCCESS,
 		payload: data,
 	};
 }

 function fetchApiFailure(error) {
 	console.log(error)
 	return {
 		type: FETCH_SUMMARY_SUMMARY_FAILURE,
 		payload: error,
 	};
 }

 function fetchApiInit() {
 	return {
 		type: FETCH_SUMMARY_SUMMARY_INIT,
 	};
 }

 export function fetchSummaryFulfillmentApi(group,tags) {
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
