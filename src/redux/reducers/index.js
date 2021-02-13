// Redux import
import { combineReducers } from 'redux';

// posts reducer import
import posts from './posts';

// all reducers are combined and exported to root index.js
export default combineReducers({ posts });
