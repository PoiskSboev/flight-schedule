// get config
var Sequelize = require('sequelize');
var db = require('../db/db');

var AirportModel = db.define('airport', {
  airport_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'airport_id'
  },
  airport_name: {
    type: Sequelize.STRING,
    field: 'airport_name'
  },
  airport_code: {
    type: Sequelize.STRING,
    field: 'airport_code'
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

module.exports = AirportModel;