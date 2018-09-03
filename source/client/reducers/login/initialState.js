import { localStoreFN } from '../../store/localStorage.js'

const initialState = {
  loading: true,
  error: null,
  token: null,
  user: null,
  message: null,
  auth:false
};

export default initialState;
