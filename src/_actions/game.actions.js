import { gameConstants } from '../_constants';
import { gameService } from '../_services';

export const gameActions = {
    getAll,
    addGame,
};

function getAll(param) {
    return dispatch => {
        gameService.getAll(param).then(
            data => dispatch({type: gameConstants.SUCCESS, data: data.results})
        )
    }
}

function addGame(param) {
    return dispatch => {
        gameService.addGame(param).then(
            data => dispatch({type: gameConstants.ADDGAME, data: data})
        )
    }
}



