import axios from '../../utils/config';
import endPoint from '../../utils/endpoints';

export const getLaunchListCall = (page, filters) => {
  console.log('filters', filters);
  return axios
    .get(endPoint.getLaunchList(page, filters))
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export default {
  getLaunchListCall,
};
