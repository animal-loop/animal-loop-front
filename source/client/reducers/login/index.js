import initialState from './initialState';
import {
  SAVE_LOGIN_INIT,
  SAVE_LOGIN_SUCCESS,
  SAVE_LOGIN_FAILURE,
  RESET_LOGIN,
  LOG_OUT
} from '../../actions/login/types';
import { saveLocalState, deleteLocalState } from '../../store/localStorage.js'

export default function login(state = initialState, action) {
  switch (action.type) {
    case RESET_LOGIN:
      return{
        ...state,
        message: null
      };
    case LOG_OUT:
      deleteLocalState();
      return{
        ...state,
      };
    case SAVE_LOGIN_INIT:
      return{
        ...state,
        loading: true,
        error: null,
        token: null,
        auth: false
      };
    case SAVE_LOGIN_SUCCESS:
      const auth = (action.payloadSave.status == 200)? true: false;
      if(auth){
        saveLocalState({key:'auth', value: auth})
        saveLocalState({key:'permits', value: action.payloadSave.data.permits})
        saveLocalState({key:'user', value: action.payloadSave.data.user})
      }
      return{
        ...state,
        error: null,
        loading: false,
        message: (action.payloadSave.status == 200)? null: action.payloadSave.data.message,
        auth: (action.payloadSave.status == 200)? true: false,
        token: (action.payloadSave.status == 200)? action.payloadSave.data.access_token: false,
      };
    case SAVE_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        auth: false,
        token: null,
      };
    default:
      return state;
  }
}
