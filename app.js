const express = require('express');
const Playlist = require('./models/playlist');
const Album = require('./models/album');
const Artist = require('./models/artist');
const db = require('./config/database');

const app = express();

app.use(express.json());
db.authenticate()
  .then(() => console.log('databse connected.....'))
  .catch((err) => console.log(err.message));

app.get('/api/playlists/', (req, res) => {
  Playlist.findAll()
    .then((playlist) => res.json(playlist))
    .catch((err) => res.json(err.message));
});

app.get('/api/playlists/:id', (req, res) => {
  const { id } = req.params;
  Playlist.findByPk(id)
    .then((playlist) => {
      if (playlist) res.json(playlist);
      else res.status(404).send('No playlist exists');
    });
});

Artist.hasMany(Album, {
  foreignKey: 'artistid',
});

Album.belongsTo(Artist, {
  foreignKey: 'artistid',
});

app.get('/api/artists/:id', (req, res) => {
  const { id } = req.params;
  Artist.findByPk(id, { include: [Album] })
    .then((artist) => {
      if (artist) res.json(artist);
      else res.status(404).send('No playlist exists');
    })
    .catch((err) => res.json(err.message));
});

app.get('/api/albums/:id', (req, res) => {
  const { id } = req.params;
  Album.findByPk(id, { include: [Artist] })
    .then((album) => {
      if (album) res.json(album);
      else res.status(404).send('No playlist exists');
    })
    .catch((err) => res.json(err.message));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening to the port ${PORT}...`));
