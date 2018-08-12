const express = require('express');
const request = require('request');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/tunes', (req,res) => {
  const limit = req.query.songs || 100;
  request(`https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/${limit}/explicit.json`, (err,response,body) => {
    res.send(body);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
