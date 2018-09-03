import initialState from './initialState';
import {
  RESET_TAGS,
  FETCH_TAGS_INIT,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_TAG_FATIGUE_INIT,
  FETCH_TAG_FATIGUE_SUCCESS,
  FETCH_TAG_FATIGUE_FAILURE,
} from '../../../actions/common/tags/types';

export default function tags(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAG_FATIGUE_INIT:
      return{
        ...state,
        filter: [],
        loading: true
      };
    case FETCH_TAG_FATIGUE_SUCCESS:
      return{
        ...state,
        filter: action.payload.data,
        loading: false
      };
    case FETCH_TAG_FATIGUE_FAILURE:
      return{
        ...state,
        filter: [],
        loading: false
      };
    default:
      return state;
  }
}