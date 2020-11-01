import { combineReducers } from 'redux';

import launches from './spacex';

const rootReducer = combineReducers({
  launches,
});

export default rootReducer;