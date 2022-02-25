import { gameConstants } from '../_constants';
import { gameService } from '../_services';

export const gameActions = {
  getAll,
  addGame,
  getMyGames,
  getGame,
  editGame,
  updateGame,
};

function getAll(param) {
  return (dispatch) => {
    gameService.getAll(param).then((data) => dispatch({ type: gameConstants.SUCCESS, data: data.results }));
  };
}

function getMyGames(param) {
  return (dispatch) => {
    gameService.getMyGames(param).then((data) => dispatch({ type: gameConstants.GETMYGAMES, data }))
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

/**
 * Edit game internal app, without connection with API
 * @param {Object} param - game object, save in state: games.currgame 
 * @returns 
 */
function editGame(param) {
  return (dispatch) => dispatch({ type: gameConstants.EDITGAME, data: param });
}

function updateGame(param) {
  return (dispatch) => {
    gameService.updateGame(param).then((data) => dispatch({ type: gameConstants.UPDATEGAME, data }));
  };
}
