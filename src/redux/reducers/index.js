// Redux import
import { combineReducers } from 'redux';

// reducers import
import posts from './posts';
import auth from './auth';
import user from './user';

// all reducers are combined and exported to root index.js
export default combineReducers({ posts, auth, user });
