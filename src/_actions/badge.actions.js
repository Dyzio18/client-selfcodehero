import { badgeConstants } from '../_constants';
// import { badgeService } from '../_services';

export const badgeActions = {
    addBadge,
    deleteBadge,
};

function addBadge(param) {
    return (dispatch) => {
        dispatch({ type: badgeConstants.ADD_BADGE, data: param });
    };
}

function deleteBadge(param) {
    return (dispatch) => {
        dispatch({ type: badgeConstants.DELETE_BADGE, data: param });
    };
}
