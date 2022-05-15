const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets.js')



router.get('/tickets/new', ticketsCtrl.newTicket);
router.post('/tickets', ticketsCtrl.create);
router.post('/:id/tickets', ticketsCtrl.addTickets);


module.exports = router;