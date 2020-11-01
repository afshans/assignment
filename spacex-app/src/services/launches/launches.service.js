import axios from '../../utils/config';
import endPoint from '../../utils/endpoints';

export const getLaunchListCall = page => {
  return axios
    .get("https://api.spacexdata.com/v3/launches?limit=5")
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
