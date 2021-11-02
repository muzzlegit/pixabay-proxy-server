const express = require ('express');
const cors = require('cors');
const fetchImage = require('./fetch-image.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors('*'));

app.get('/img', (req, res) => {
  const { searchQuery, page, perPage } = req.query;

  fetchImage(searchQuery, page, perPage)
    .then(image => res.status(200).json(image))
    .catch(error => res.status(400).json({ message: error }));
 });
app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});