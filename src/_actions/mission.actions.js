
import { missionConstants } from '../_constants';
// import { missionService } from '../_services';

export const missionActions = {
    addMission,
    deleteMission,
};

function addMission(param) {
    return (dispatch) => {
        dispatch({ type: missionConstants.ADD_MISSION, data: param });
    };
}

function deleteMission(param) {
    return (dispatch) => {
        dispatch({ type: missionConstants.DELETE_MISSION, data: param });
    };
}
