import initialState from './initialState';
 import {
 	FETCH_ACCOUNT_SETTING_INIT,
 	FETCH_ACCOUNT_SETTING_SUCCESS,
 	FETCH_ACCOUNT_SETTING_FAILURE,
 } from '../../actions/account_setting/types';

 export default function accountSetting(state = initialState, action) {
 	switch (action.type) {
 		case FETCH_ACCOUNT_SETTING_INIT:
 			return{
 				...state,
 				loading: true,
 				error: null,
 			}; 		case FETCH_ACCOUNT_SETTING_SUCCESS:
 			return{
 				...state,
 				datos: action.payload.data,
 				error: null,
 				loading: false,
 				status: action.payload.status
 			};
 			case FETCH_ACCOUNT_SETTING_FAILURE:
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