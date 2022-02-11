import { gameConstants } from '../_constants';

export function games(state = {}, action) {
    switch (action.type) {
        case gameConstants.SUCCESS:
            return {
                type: 'GET_GAMES',
                data: action.data
            };
        case gameConstants.ADDGAME:
            return {
                type: 'ADD_GAMES',
                data: [...state.data, action.data]
            };
        default:
            return state
    }
}