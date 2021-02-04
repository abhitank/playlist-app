const db = require('../config/database');

module.exports = db.define('albums', {
  albumid: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    field: 'albumid',
  },
  title: {
    type: db.Sequelize.STRING,
    field: 'title',
  },
  artistid: {
    type: db.Sequelize.STRING,
    field: 'artistrelated',
  },

},
{
  timestamps: false,
});
