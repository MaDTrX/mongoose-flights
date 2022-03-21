const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Flight Tracker"});
});

module.exports = router;
