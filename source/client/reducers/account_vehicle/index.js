import initialState from './initialState';
import {
  FETCH_ACCOUNT_VEHICLE_INIT,
  FETCH_ACCOUNT_VEHICLE_SUCCESS,
  FETCH_ACCOUNT_VEHICLE_FAILURE,
  FETCH_ACCOUNT_VEHICLE_NO_LOADING_INIT,
  FETCH_ACCOUNT_VEHICLE_NO_LOADING_SUCCESS,
  FETCH_ACCOUNT_VEHICLE_NO_LOADING_FAILURE,
  SAVE_ACCOUNT_VEHICLE_INIT,
  SAVE_ACCOUNT_VEHICLE_SUCCESS,
  SAVE_ACCOUNT_VEHICLE_FAILURE,
  FETCH_ACCOUNT_VEHICLE_COUNT_INIT,
  FETCH_ACCOUNT_VEHICLE_COUNT_SUCCESS,
  FETCH_ACCOUNT_VEHICLE_COUNT_FAILURE,
} from '../../actions/account_vehicle/types';

export default function accountVehicle(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT_VEHICLE_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ACCOUNT_VEHICLE_SUCCESS:
      return{
        ...state,
        datos: action.payload.data,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_ACCOUNT_VEHICLE_FAILURE:
      return{
        ...state,
        datos: [],
        error: action.payload,
        loading: false,
      };
    case FETCH_ACCOUNT_VEHICLE_NO_LOADING_INIT:
      return{
        ...state,
        error: null,
        loadingTable: true,
      };
    case FETCH_ACCOUNT_VEHICLE_NO_LOADING_SUCCESS:
      return{
        ...state,
        datos: (action.concat)?state.datos.concat(action.payload.data):action.payload.data,
        error: null,
        status: action.payload.status,
        loadingTable: false, 
      };
    case FETCH_ACCOUNT_VEHICLE_NO_LOADING_FAILURE:
      return{
        ...state,
        datos: [],
        error: action.payload,
        loadingTable: false,
      };
    case SAVE_ACCOUNT_VEHICLE_INIT:
      return{
        ...state,
        error: null,
        loadingSave: true, 
      };
    case SAVE_ACCOUNT_VEHICLE_SUCCESS:
      return{
        ...state,
        error: null,
        loadingSave: true, 
      };
    case SAVE_ACCOUNT_VEHICLE_FAILURE:
      return{
        ...state,
        error: action.payload,
        loadingSave: true, 
      };
    case FETCH_ACCOUNT_VEHICLE_COUNT_INIT:
      return{
        ...state,
        error: null,
      };
    case FETCH_ACCOUNT_VEHICLE_COUNT_SUCCESS:
      return{
        ...state,
        count: action.payload.data,
        error: null,
        status: action.payload.status
      };
    case FETCH_ACCOUNT_VEHICLE_COUNT_FAILURE:
      return{
        ...state,
        count: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
