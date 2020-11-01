import * as actionTypes from './actionTypes';
import { getLaunchListCall } from '../../../services/launches/launches.service';

export const getLaunches = (page, filters) => dispatch => {
  console.log('filters', filters);
  dispatch({ type: actionTypes.LAUNCHES_INIT });
  getLaunchListCall(page, filters)
    .then(data => {
      dispatch({ type: actionTypes.LAUNCHES_GET_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.LAUNCHES_GET_FAILURE,
        payload: 'Error',
      });
    });
};

export const filterLaunces = (keyName, value) => {
  return {
    type: actionTypes.LAUNCHES_GET_FILTER,
    payload: { keyName: keyName , value: value } 
  };
};

export const clearFilters = () => {
  return {
    type: actionTypes.LAUNCHES_CLEAR_FILTER,
  };
  
}

export default { getLaunches, filterLaunces, clearFilters };
