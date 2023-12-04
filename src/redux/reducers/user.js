import { SET_CURRENT_USER_ID, INITIATE_POST_EDIT } from '../constants/actionConstants';

const initialUserState = {
  currentUserId: null,
  hasSelectedEditMode: false,
};

const userReducers = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_ID: {
      return {
        ...state,
        currentUserId: action.payload,
      };
    }
    case INITIATE_POST_EDIT: {
      return {
        ...state,
        hasSelectedEditMode: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducers;
