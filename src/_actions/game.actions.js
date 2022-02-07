import { gameConstants } from '../_constants';
import { gameService } from '../_services';

export const gameActions = {
    getAll,
};

function getAll(message) {

    console.log("== GAME ACTION ==")

    gameService.getAll().then(
        resolve => console.log(resolve) 
    )

    return { type: gameConstants.SUCCESS, message };
}
