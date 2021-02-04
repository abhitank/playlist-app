const db = require('../config/database');

module.exports = db.define('artists', {
  artistid: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    field: 'artistid',
  },
  name: {
    type: db.Sequelize.STRING,
    field: 'name',
  },
},
{
  timestamps: false,
});
