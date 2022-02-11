import { gameConstants } from '../_constants';
import { gameService } from '../_services';

export const gameActions = {
  getAll,
  addGame,
  getMyGames,
  getGame,
};

function getAll(param) {
  return (dispatch) => {
    gameService.getAll(param).then((data) => dispatch({ type: gameConstants.SUCCESS, data: data.results }));
  };
}

function getMyGames(param) {
  return (dispatch) => {
    gameService.getMyGames(param).then((data) => dispatch({ type: gameConstants.GETMYGAMES, data: data.results }));
  };
}

function getGame(param) {
  return (dispatch) => {
    gameService.getGame(param).then((data) => dispatch({ type: gameConstants.GETGAME, data }));
  };
}

function addGame(param) {
  return (dispatch) => {
    gameService.addGame(param).then((data) => dispatch({ type: gameConstants.ADDGAME, data }));
  };
}
