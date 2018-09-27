import { combineReducers } from 'redux';
import login from './loginReducer';
import signup from './signupReducer';

export default combineReducers({
    login,
    signup
});