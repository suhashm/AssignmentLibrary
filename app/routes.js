
module.exports = function (app, passport) {

//var router = express.Router();  				// get an instance of the express Router

// Default document when server is loaded
    app.get('/', function(req, res) {
        res.render('index.html');
    });

    /*app.get('/dqp', function(req, res) {
        res.render('partials/dqp.html');
    });*/

    //profile page once authenticated
    app.get('/dqp', isLoggedIn, function(req, res) {
        res.render('partials/dqp.html', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/t', function(req,res){
       res.json({message: 'test json'});
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/dqp', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/dqp', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    /*app.get('/partials/:name', function (req, res) {
     var name = req.params.name;
     res.render('partials/' + name+'.html');
     });*/

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}