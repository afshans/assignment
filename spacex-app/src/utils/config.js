import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';


const instance = applyCaseMiddleware(axios.create({
  baseURL: 'https://api.spacexdata.com/v3/',
}));

export default instance;
