import initialState from './initialState';
 import {
 	FETCH_DETAIL_BEHAVIOUR_INIT,
 	FETCH_DETAIL_BEHAVIOUR_SUCCESS,
 	FETCH_DETAIL_BEHAVIOUR_FAILURE,
 } from '../../actions/detail_behaviour/types';

 export default function detail_behaviour(state = initialState, action) {
 	switch (action.type) {
 		case FETCH_DETAIL_BEHAVIOUR_INIT:
 			return{
 				...state,
 				loading: true,
 				error: null,
 			}; 		case FETCH_DETAIL_BEHAVIOUR_SUCCESS:
 			return{
 				...state,
 				datos: action.payload.data,
 				error: null,
 				loading: false,
 				status: action.payload.status
 			};
 			case FETCH_DETAIL_BEHAVIOUR_FAILURE:
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