import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const boardData = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...state, action.payload];

    case UPDATE:
      return state.map((project) => project._id === action.payload._id ? action.payload : project)

      case DELETE:
      return state.filter((project) => project._id !== action.payload);
    default:
        return state;
  }
};

export default boardData;