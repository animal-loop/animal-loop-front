import {
  NAV,
} from './types';


/* Actions Creators */
export function nav(obj) {
  return {
    type: NAV,
    payload: obj
  };
}