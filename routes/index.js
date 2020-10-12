var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get('/', function (req, res) {
	res.render('landing');
});

//register form route
router.get('/register', function (req, res) {
	res.render('register');
});


/*	var newUser = new User({username: req.body.username});
 User.register(newUser, req.body.password, function(err, user){*/

//Handling Sign Up logic route
router.post('/register', function (req, res) {
	User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
		if (err) {
			req.flash("error", err.message);
			return res.render('register');
		}
		passport.authenticate('local')(req, res, function () {
			req.flash("success", "Welcome to YelpCamp " + user.username);
			res.redirect('/campgrounds');
		});
	});
});

//show Login form
router.get('/login', function (req, res) {
	res.render('login');
});

//handling login form logic
router.post('/login',passport.authenticate('local', {
		successRedirect: '/campgrounds',
		failureRedirect: '/login',
	}),
	function (req, res) {
}
);

//logout route

router.get('/logout', function (req, res) {
	req.logout();
	req.flash("success", "Successfully Logged Out");
	res.redirect("/campgrounds");
});

module.exports = router;