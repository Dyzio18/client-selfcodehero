import { gameConstants } from '../_constants';
import { gameService } from '../_services';

export const gameActions = {
    getAll,
};

function getAll() {

    return dispatch => {
        gameService.getAll().then(
            data => dispatch({type: gameConstants.SUCCESS, data})
        )
    }

}
