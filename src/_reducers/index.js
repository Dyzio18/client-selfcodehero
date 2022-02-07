import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { games } from './games.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    games,
    alert
});

export default rootReducer;