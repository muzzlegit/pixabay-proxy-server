const fetch = require('node-fetch');

const endpoint = 'https://pixabay.com/api';

const fetchImage = ( query, page, perPage ) => {

  const apikey = process.env.API_KEY;
  const url = `${endpoint}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${apikey}`;
  
  return fetch(url).then(res => res.json());
}
module.exports = fetchImage;