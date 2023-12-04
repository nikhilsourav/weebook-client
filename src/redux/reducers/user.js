import {
  SET_CURRENT_USER_ID,
  INITIATE_POST_EDIT,
  POST_CLICKED,
  FAB_CLICKED,
} from '../constants/actionConstants';

const initialUserState = {
  currentUserId: null,
  hasSelectedEditMode: false,
  hasClickedPostBtn: false,
  hasClickedFab: false,
};

const userReducers = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_ID: {
      return { ...state, currentUserId: action.payload };
    }
    case INITIATE_POST_EDIT: {
      return { ...state, hasSelectedEditMode: action.payload };
    }
    case POST_CLICKED: {
      return { ...state, hasClickedPostBtn: action.payload };
    }
    case FAB_CLICKED: {
      return { ...state, hasClickedFab: action.payload };
    }
    default:
      return state;
  }
};

export default userReducers;
