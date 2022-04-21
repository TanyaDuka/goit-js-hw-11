import axios from 'axios';
//const axios = require('axios').default;

const KEY = 'f132e609f22bab827cfdbeee1';
const BASE_URL = 'https://pixabay.com/api/';


export const options = {
        key: `${KEY}`,
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
}


export async function  getPhoto ()  {
  const  response  = await axios.get(`${BASE_URL}`, options);

  return response;
};