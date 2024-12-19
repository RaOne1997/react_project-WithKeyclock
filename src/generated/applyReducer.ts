
import { AnyAction } from 'redux';
const initialState: any[] = [];
const SUCCESS_SUFFIX = '_SUCCESS';

const applyReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LIST_APPLY' + SUCCESS_SUFFIX:
      return action.payload.data;

    case 'ADD_APPLY' + SUCCESS_SUFFIX:
      return [...state, action.payload.data];

    case 'UPDATE_APPLY' + SUCCESS_SUFFIX:
      return state.map(item => item.id === action.payload.data.id ? action.payload.data : item);

    case 'DELETE_APPLY':
      return state.filter(item => item.id !== action.payload.item.id);

    default:
      return state;
  }
};

export default applyReducer;
  