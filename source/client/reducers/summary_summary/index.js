import initialState from './initialState';
 import {
 	FETCH_SUMMARY_SUMMARY_INIT,
 	FETCH_SUMMARY_SUMMARY_SUCCESS,
 	FETCH_SUMMARY_SUMMARY_FAILURE,
 } from '../../actions/summary_summary/types';

 export default function summaryFulfillment(state = initialState, action) {
 	switch (action.type) {
 		case FETCH_SUMMARY_SUMMARY_INIT:
 			return{
 				...state,
 				loading: true,
 				error: null,
 			}; 		case FETCH_SUMMARY_SUMMARY_SUCCESS:
 			return{
 				...state,
 				datos: action.payload.data,
 				error: null,
 				loading: false,
 				status: action.payload.status
 			};
 			case FETCH_SUMMARY_SUMMARY_FAILURE:
 			return{
 				...state,
 				datos: {},
 				error: action.payload,
 				loading: false,
 			};
 		default:
 			return state;
 	}
 }