var Sequelize = require('sequelize');
var config = require('../config.js')

var db = new Sequelize(config.ConnectionString);

module.exports = db;