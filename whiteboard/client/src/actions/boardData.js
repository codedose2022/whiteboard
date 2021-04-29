import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from "../api";

export const getBoardData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBoard();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProject = (post) => async (dispatch) => {
  try {
    const { data } = await api.addProject(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
 