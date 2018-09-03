import initialState from './initialState';
import {
  FETCH_ASSIGNMENT_LIST_SETTING_INIT,
  FETCH_ASSIGNMENT_LIST_SETTING_SUCCESS,
  FETCH_ASSIGNMENT_LIST_SETTING_FAILURE,
  FETCH_ASSIGNMENT_LIST_INIT,
  FETCH_ASSIGNMENT_LIST_SUCCESS,
  FETCH_ASSIGNMENT_LIST_FAILURE,
} from '../../actions/assignment_list/types';

export default function summaryRoadwarning(state = initialState, action) {
  switch (action.type) {
    case FETCH_ASSIGNMENT_LIST_SETTING_INIT:
      return{
        ...state,
        loadingFilter: true,
        error: null,
      };
    case FETCH_ASSIGNMENT_LIST_SETTING_SUCCESS:
      return{
        ...state,
        filter: action.payload.data,
        error: null,
        loadingFilter: false,
        status: action.payload.status
      };
    case FETCH_ASSIGNMENT_LIST_SETTING_FAILURE:
      return{
        ...state,
        filter: {},
        error: action.payload,
        loadingFilter: false,
      };
    case FETCH_ASSIGNMENT_LIST_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ASSIGNMENT_LIST_SUCCESS:
      return{
        ...state,
        datos: action.payload.data,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_ASSIGNMENT_LIST_FAILURE:
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
