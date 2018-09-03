import {
	FETCH_DETAIL_BEHAVIOUR_INIT,
 	FETCH_DETAIL_BEHAVIOUR_SUCCESS,
 	FETCH_DETAIL_BEHAVIOUR_FAILURE,
 } from './types';
 import API from './api';

 function fetchApiSuccess(data) {
 	return {
 		type: FETCH_DETAIL_BEHAVIOUR_SUCCESS,
 		payload: data,
 	};
 }

 function fetchApiFailure(error) {
 	console.log(error)
 	return {
 		type: FETCH_DETAIL_BEHAVIOUR_FAILURE,
 		payload: error,
 	};
 }

 function fetchApiInit() {
 	return {
 		type: FETCH_DETAIL_BEHAVIOUR_INIT,
 	};
 }

 export function fetchDetail_behaviourApi(group,tags) {
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
