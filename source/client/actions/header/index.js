import {
  NOTIFICATION,
  RESET_HEADER,
} from './types';


export function resetHeader() {
  return {
    type: RESET_HEADER,
  };
}

/* Actions Creators */
export function notification(obj) {
  return {
    type: NOTIFICATION,
    payload: obj
  };
}