import { combineReducers } from 'redux';
import auth from './authReducer';
import utils from './utils'

export default combineReducers({
  auth,
  utils,
});
