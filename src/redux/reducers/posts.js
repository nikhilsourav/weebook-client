// import const action types
import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionConstants';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload]; // all posts and created post
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id != action.payload); // return filtered array
    default:
      return posts;
  }
};
