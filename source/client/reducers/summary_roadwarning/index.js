import initialState from './initialState';
import {
  FETCH_SUMMARY_ROADWARNING_INIT,
  FETCH_SUMMARY_ROADWARNING_SUCCESS,
  FETCH_SUMMARY_ROADWARNING_FAILURE,
} from '../../actions/summary_roadwarning/types';

export default function summaryRoadwarning(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUMMARY_ROADWARNING_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUMMARY_ROADWARNING_SUCCESS:
      return{
        ...state,
        datos: action.payload.data,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_SUMMARY_ROADWARNING_FAILURE:
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
