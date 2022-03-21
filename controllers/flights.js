const Flight = require('../models/flight')

module.exports = {
    create,
    index,
    new: newflight,
    
}
function index (req, res) {
    
         Flight.find({}, function (err, flights) {
             res.render('flights/index', { flights })
         })
    }

    function newflight(req, res) {
        res.render('flights/new');
      }
      
      function create(req, res) {

        for (let key in req.body) {
          if (req.body[key] === '') delete req.body[key];
        }
        const flight = new Flight(req.body);
        flight.save(function(err) {
          // one way to handle errors
          if (err) return res.render('flights/new');
          console.log(flight);
          // for now, redirect right back to new.ejs
          res.redirect('/flights');
        });
      }