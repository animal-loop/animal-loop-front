import {
	FETCH_SUMMARY_FULFILLMENT_INIT,
 	FETCH_SUMMARY_FULFILLMENT_SUCCESS,
 	FETCH_SUMMARY_FULFILLMENT_FAILURE,
 } from './types';
 import API from './api';

 function fetchApiSuccess(data) {
 	return {
 		type: FETCH_SUMMARY_FULFILLMENT_SUCCESS,
 		payload: data,
 	};
 }

 function fetchApiFailure(error) {
 	console.log(error)
 	return {
 		type: FETCH_SUMMARY_FULFILLMENT_FAILURE,
 		payload: error,
 	};
 }

 function fetchApiInit() {
 	return {
 		type: FETCH_SUMMARY_FULFILLMENT_INIT,
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
