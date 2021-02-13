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
