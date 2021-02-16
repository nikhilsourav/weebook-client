// api imports
import * as api from '../../api';
// constants
import { FETCH_ALL, DELETE, UPDATE, CREATE } from '../constants/actionConstants';

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts(); // destructure data received from api
    dispatch({ type: FETCH_ALL, payload: data }); // dispatch action type and data
  } catch (error) {
    console.log(error, 'action creation error');
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post); // send post data
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error, 'action creation error');
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error, 'action creation error');
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
