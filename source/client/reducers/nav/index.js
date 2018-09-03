import initialState from './initialState';
import {
  NAV,
} from '../../actions/nav/types';
import { saveLocalState, deleteLocalState } from '../../store/localStorage.js'

export default function nav(state = initialState, action) {
  switch (action.type) {
    case NAV:
      const obj = {
        ...state,
      }
      return obj;
    default:
      return state;
  }
}
