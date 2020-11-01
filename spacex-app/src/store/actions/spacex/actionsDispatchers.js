import * as actionTypes from './actionTypes';
import { getLaunchListCall } from '../../../services/launches/launches.service';

export const getLaunches = (page, filters) => dispatch => {
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
  


export default { getLaunches };
