import initialState from './initialState';
 import {
 	FETCH_DETAIL_ROADWARNING_INIT,
 	FETCH_DETAIL_ROADWARNING_SUCCESS,
 	FETCH_DETAIL_ROADWARNING_FAILURE,
 } from '../../actions/detail_roadwarning/types';

 export default function detail_roadwarning(state = initialState, action) {
 	switch (action.type) {
 		case FETCH_DETAIL_ROADWARNING_INIT:
 			return{
 				...state,
 				loading: true,
 				error: null,
 			}; 		case FETCH_DETAIL_ROADWARNING_SUCCESS:
 			return{
 				...state,
 				datos: action.payload.data,
 				error: null,
 				loading: false,
 				status: action.payload.status
 			};
 			case FETCH_DETAIL_ROADWARNING_FAILURE:
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