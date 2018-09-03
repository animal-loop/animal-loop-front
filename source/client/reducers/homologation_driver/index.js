import initialState from './initialState';
import {
  FETCH_HOMOLOGATION_DRIVER_INIT,
  FETCH_HOMOLOGATION_DRIVER_SUCCESS,
  FETCH_HOMOLOGATION_DRIVER_FAILURE,
  SAVE_HOMOLOGATION_DRIVER_INIT,
  SAVE_HOMOLOGATION_DRIVER_SUCCESS,
  SAVE_HOMOLOGATION_DRIVER_FAILURE,
} from '../../actions/homologation_driver/types';

export default function homologationDriver(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOMOLOGATION_DRIVER_INIT:
      return{
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOMOLOGATION_DRIVER_SUCCESS:
      return{
        ...state,
        datos: action.payload.data,
        error: null,
        loading: false,
        status: action.payload.status
      };
    case FETCH_HOMOLOGATION_DRIVER_FAILURE:
      return{
        ...state,
        datos: {},
        error: action.payload,
        loading: false,
      };
    case SAVE_HOMOLOGATION_DRIVER_INIT:
      return{
        ...state,
        loading: true,
        errorSave: null,
      };
    case SAVE_HOMOLOGATION_DRIVER_SUCCESS:
      return{
        ...state,
        errorSave: null,
        loadingSave: false,
      };
    case SAVE_HOMOLOGATION_DRIVER_FAILURE:
      return{
        ...state,
        errorSave: action.payload,
        loadingSave: false,
      };
    default:
      return state;
  }
}
