import initialState from './initialState';
import {
  NOTIFICATION,
  RESET_HEADER 
} from '../../actions/header/types';
import { deleteLocalState } from '../../store/localStorage.js'

export default function header(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION:
      return{
        ...state,
        notification: action.payload.notification,
        task: action.payload.task,
        user: action.payload.user,
      };
    case RESET_HEADER:
      return{
        ...state,
        notification: false,
        task: false,
        user: false,
      };
    default:
      return state;
  }
}
