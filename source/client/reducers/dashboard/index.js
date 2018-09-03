import initialState from './initialState';
import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  FETCH_DASHBOARD_DATE_INIT,
  FETCH_DASHBOARD_DATE_SUCCESS,
  FETCH_DASHBOARD_DATE_FAILURE,
  RESET_DASHBOARD,
} from '../../actions/dashboard/types';

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case FETCH_DASHBOARD_INIT:
      return{
        ...state,
        setting: null,
        loading: true,
        error: null,
      };
    case FETCH_DASHBOARD_SUCCESS:
      return{
        ...state,
        setting: (action.payload.data)?action.payload.data:false,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_DASHBOARD_FAILURE:
      return{
        ...state,
        setting: null,
        error: action.payload,
        loading: false,
      };

    /* Date */
    case FETCH_DASHBOARD_DATE_INIT:
      return{
        ...state,
        dateMax: [],
        loading: true,
        error: null,
      };
    case FETCH_DASHBOARD_DATE_SUCCESS:
      return{
        ...state,
        dateMax: action.payload.data,
        error: null,
        loading: true,
        status: action.payload.status
      };
    case FETCH_DASHBOARD_DATE_FAILURE:
      return{
        ...state,
        dateMax: [],
        error: action.payload,
        loading: false,
      };
    case RESET_DASHBOARD:
      return{
        ...state,
        setting: null,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
