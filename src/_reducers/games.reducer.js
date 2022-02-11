import { gameConstants } from '../_constants';

export function games(state = { data: [], mygames: [] }, action) {
  switch (action.type) {
    case gameConstants.SUCCESS:
      return {
        ...state,
        data: [...action.data],
      };
    case gameConstants.ADDGAME:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case gameConstants.GETMYGAMES:
      return {
        ...state,
        mygames: [...action.data],
      };
    case gameConstants.GETGAME:
      return {
        ...state,
        currgame: action.data,
      };
    default:
      return state;
  }
}
