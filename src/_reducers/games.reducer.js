import { gameConstants } from '../_constants';

export function games(state = {}, action) {
    switch (action.type) {
        case gameConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        default:
            return state
    }
}