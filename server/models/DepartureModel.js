// get config
var Sequelize = require('sequelize');
var db = require('../db/db');
var AirportModel = require('./AirportModel')

var DepartureModel = db.define('departure', {
  departure_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'departure_id'
  },
  marketing_carrier_code: {
    type: Sequelize.STRING,
    field: 'marketing_carrier_code'
  },
  flight_no: {
    type: Sequelize.STRING,
    field: 'flight_no'
  },
  departure_date_time: {
    type: Sequelize.DATE,
    field: 'departure_date_time'
  },
  departure_airport_id: {
    type: Sequelize.INTEGER,
    field: 'departure_airport_id',
    references: {
       model: AirportModel,
       key: 'airport_id',
       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  arrival_airport_id: {
    type: Sequelize.INTEGER,
    field: 'arrival_airport_id',
    references: {
       model: AirportModel,
       key: 'airport_id',
       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

AirportModel.hasMany(DepartureModel, {foreignKey: 'arrival_airport_id', as: 'arrival_airport'})
DepartureModel.belongsTo(AirportModel, {foreignKey: 'arrival_airport_id', as: 'arrival_airport'})

AirportModel.hasMany(DepartureModel, {foreignKey: 'departure_airport_id', as: 'departure_airport'})
DepartureModel.belongsTo(AirportModel, {foreignKey: 'departure_airport_id', as: 'departure_airport'})

module.exports = DepartureModel;