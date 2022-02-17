import { gameConstants } from '../_constants';


const defaultCurrGame = {
  name: '',
  desc: '',
}

export function games(state = { data: [], mygames: [], currgame: defaultCurrGame }, action) {

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
    case gameConstants.EDITGAME:
      return {
        ...state,
        currgame: Object.assign(state.currgame, action.data),
      };
    case gameConstants.UPDATEGAME:
      return {
        ...state,
        currgame: Object.assign(state.currgame, action.data),
      };
    default:
      return state;
  }
}
