const db = require('../config/database');

module.exports = db.define('playlists', {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    field: 'playlistid',
  },
  name: {
    type: db.Sequelize.STRING,
    field: 'name',
  },
},
{
  timestamps: false,
});
