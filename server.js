
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set views directory for static file serving (CSS and JS) from express
app.use(express.static(__dirname + "/views"));
app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();  				// get an instance of the express Router

// Default document when server is loaded
router.get('/', function(req, res) {
    res.render('index.html');
});

router.get('/t', function(req,res){
   res.json({message: 'test json'});
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
