var express = require('express');
var itemsController = require('../controllers/FlightController');

module.exports = function () {
  var router = express.Router();
  router.get('/items', itemsController.getItems);
  router.get('/items/:id', itemsController.getItem);
  router.post('/items', itemsController.saveItem);
  return router;
};