const Ticket = require('../models/ticket');

const Flight = require('../models/flight');
	
module.exports = {
  addTickets,
  newTicket,
  create
};
	
function addTickets(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
    ticket.flight.push(req.body.ticketsId);
    console.log(req.body.ticketsId)
    ticket.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}
function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
      res.redirect('/tickets/new');
    });
  }
  
function newTicket(req, res) {

    res.render('tickets/new');
}
