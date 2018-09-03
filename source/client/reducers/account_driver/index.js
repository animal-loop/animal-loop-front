import initialState from './initialState';
import {
  FETCH_ACCOUNT_DRIVER_INIT,
  FETCH_ACCOUNT_DRIVER_SUCCESS,
  FETCH_ACCOUNT_DRIVER_FAILURE,
} from '../../actions/account_driver/types';

export default function accountDriver(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT_DRIVER_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ACCOUNT_DRIVER_SUCCESS:
      return{
        ...state,
        datos: action.payload.data,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_ACCOUNT_DRIVER_FAILURE:
      return{
        ...state,
        datos: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
