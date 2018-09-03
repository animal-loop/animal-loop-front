import initialState from './initialState';
 import {
 	FETCH_DETAIL_FULFILLMENT_INIT,
 	FETCH_DETAIL_FULFILLMENT_SUCCESS,
 	FETCH_DETAIL_FULFILLMENT_FAILURE,
 } from '../../actions/detail_fulfillment/types';

 export default function detailFulfillment(state = initialState, action) {
 	switch (action.type) {
 		case FETCH_DETAIL_FULFILLMENT_INIT:
 			return{
 				...state,
 				loading: true,
 				error: null,
 			}; 		case FETCH_DETAIL_FULFILLMENT_SUCCESS:
 			return{
 				...state,
 				datos: action.payload.data,
 				error: null,
 				loading: false,
 				status: action.payload.status
 			};
 			case FETCH_DETAIL_FULFILLMENT_FAILURE:
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