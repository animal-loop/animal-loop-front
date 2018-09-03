import initialState from './initialState';
 import {
 	FETCH_DRIVER_FULFILLMENT_INIT,
 	FETCH_DRIVER_FULFILLMENT_SUCCESS,
 	FETCH_DRIVER_FULFILLMENT_FAILURE,
 } from '../../actions/driver_fulfillment/types';

 export default function driverFulfillment(state = initialState, action) {
 	switch (action.type) {
 		case FETCH_DRIVER_FULFILLMENT_INIT:
 			return{
 				...state,
 				loading: true,
 				error: null,
 			}; 		case FETCH_DRIVER_FULFILLMENT_SUCCESS:
 			return{
 				...state,
 				datos: action.payload.data,
 				error: null,
 				loading: false,
 				status: action.payload.status
 			};
 			case FETCH_DRIVER_FULFILLMENT_FAILURE:
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