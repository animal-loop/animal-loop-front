import initialState from './initialState';
import {
  FETCH_DETAIL_FATIGUE_INIT,
  FETCH_DETAIL_FATIGUE_SUCCESS,
  FETCH_DETAIL_FATIGUE_FAILURE,
} from '../../actions/detail_fatigue/types';

export default function detailFatiga(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAIL_FATIGUE_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DETAIL_FATIGUE_SUCCESS:
      return{
        ...state,
        datos: action.payload.data,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_DETAIL_FATIGUE_FAILURE:
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
