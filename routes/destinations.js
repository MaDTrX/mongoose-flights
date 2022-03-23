const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js')
/* GET users listing. */



router.get('/show/:id', flightsCtrl.findById)
router.post('/show/:id/destinations', flightsCtrl.findById)


module.exports = router;
