import * as api from '../../Apis/Api.js'; // backend services
import { FETCH_ALL, DELETE, UPDATE, CREATE } from '../constants/actionConstants';

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error('Error in getPosts action creator:', error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error('Error in createPost action creator:', error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error('Error in updatePost action creator:', error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.error('Error in deletePost action creator:', error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error('Error in likePost action creator:', error);
  }
};
