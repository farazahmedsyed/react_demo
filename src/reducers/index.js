import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import progress from './progress';
import user from './user';
import tag from './tag';
import data from './data';

export default combineReducers({
    login,signup,progress,user,tag,data

  })