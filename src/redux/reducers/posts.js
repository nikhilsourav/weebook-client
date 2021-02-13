// import const action types
import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionConstants';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload]; // all posts and created post
    case DELETE:
      return posts;
    case UPDATE:
      return posts;
    default:
      return posts;
  }
};
