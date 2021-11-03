const fetch = require('node-fetch');

const endpoint = 'https://pixabay.com/api';

const fetchImage = ( { query } ) => {

  const apikey = process.env.API_KEY;
  // const url = `${endpoint}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${apikey}`;
  const url = "https://pixabay.com/api?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=24154374-c1e84db869e410d68acac2009"
  return fetch(url).then(res => res.json()).then(console.log);
}
module.exports = fetchImage;