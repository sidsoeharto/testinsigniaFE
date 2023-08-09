import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api/';
const APP_ID = '64d269268d5d504be9224efd';

const axiosInstance = axios.create({
  baseUrl: BASE_URL, 
  headers: {
    'app-id': APP_ID
  }
});

export default axiosInstance;