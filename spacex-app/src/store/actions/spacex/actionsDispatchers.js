import * as actionTypes from './actionTypes';
import { getLaunchListCall } from '../../../services/launches/launches.service';

export const getLaunches = page => dispatch => {
  dispatch({ type: actionTypes.LAUNCHES_INIT });
  getLaunchListCall(page)
    .then(data => {
      console.log('data', data);
      dispatch({ type: actionTypes.LAUNCHES_GET_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.LAUNCHES_GET_FAILURE,
        payload: 'Error',
      });
    });
};

export const filterLaunces = name => {
  return {
    type: actionTypes.LAUNCHES_GET_FILTER,
    payload: name,
  };
};
export const setOrderBy = value => {
  return {
    type: actionTypes.SET_ORDER_BY,
    payload: value,
  };
};
export default { getLaunches, filterLaunces, setOrderBy };
