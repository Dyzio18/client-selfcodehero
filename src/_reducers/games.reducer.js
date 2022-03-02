import { badgeConstants, gameConstants, missionConstants } from '../_constants';

const defaultCurrGame = {
  name: '',
  desc: '',
  badges: [],
  missions: [],
  players: [],
}

const deleteBadge = (state, hash) => {
  let badges = state.currgame.badges.filter((elem) => {
    return (elem && elem.hash !== hash)
  });
  return badges;
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
    case badgeConstants.ADD_BADGE:
      return {
        ...state,
        currgame: Object.assign(state.currgame, { badges: [...state.currgame.badges, action.data] }),
      };
    case badgeConstants.DELETE_BADGE:
      return {
        ...state,
        currgame: Object.assign(state.currgame, { badges: deleteBadge(state, action.data) }),
      };
    case missionConstants.ADD_MISSION:
      return {
        ...state,
        currgame: Object.assign(state.currgame, { missions: [...state.currgame.missions, action.data] }),
      };
    case missionConstants.DELETE_MISSION:
      return {
        ...state,
        currgame: Object.assign(state.currgame, { missions: deleteBadge(state, action.data) }),
      };
    default:
      return state;
  }
}
