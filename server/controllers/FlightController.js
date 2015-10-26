var DepartureModel = require('../models/DepartureModel');
var AirportModel = require('../models/AirportModel');

module.exports = {
  // GET /items/:id
  getItem: function(req, res, next) {
    var id = req.params.id;
    DepartureModel
      .findById(id)
      .then(function(model) {
        res.json(model);
      });
  },
  // GET /items
  getItems: function(req, res, next) {
    var findConfiguration = {
        order:[
          ['departure_date_time', 'DESC']
        ],
        include: [
          {model: AirportModel, as:'arrival_airport'},
          {model: AirportModel, as:'departure_airport'},
        ],
        limit: 100
      };

    var fromDate = undefined;
    var toDate = undefined;

    if (req.query.period !== undefined && req.query.period !== "-1")
    {
      var period = req.query.period;
      fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - period);
      toDate = new Date("3000-01-01");
    } else {
      if (req.query.fromDate !== undefined){
        fromDate = new Date(req.query.fromDate);
      } else {
        fromDate = new Date();
      }

      if (req.query.toDate !== undefined){
        toDate = new Date(req.query.toDate);
      } else {
        toDate = new Date("3000-01-01");
      }
    }

    findConfiguration.where = 
      {
        departure_date_time: {$gt : fromDate, $lt: toDate}
      };

    DepartureModel
      .findAll(findConfiguration)
      .then(function (model) {
        res.json(model);
      });
  },
  // POST /items
  // (Don't forget to validate and sanitize all user input)
  saveItem: function(req, res, next) {
    DepartureModel
      .build(req.body)
      .save()
      .then(function (model) {
        res.json(model);
      });
  }
};