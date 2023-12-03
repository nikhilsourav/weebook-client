import { USER } from '../constants/actionConstants';

const userReducers = (state = { loggedInUserId: null }, action) => {
  switch (action.type) {
    case USER: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default userReducers;
