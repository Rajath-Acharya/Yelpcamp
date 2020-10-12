var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware =require("../middleware");

//index route- show all campgrounds
router.get("/", function (req, res) {
	// get all campgrounds from db
	Campground.find({}, function (err, allCampgrounds) {
		if (err) {
			console.log(err);
		} else {
			res.render('campgrounds/index', { campgrounds: allCampgrounds});
		}
	});
});

//create route- add new cmpgrunds to DB
router.post('/',middleware.isLoggedIn, function (req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var price = req.body.price;
	var dsc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = { name: name,price:price, image: image, description: dsc, author: author };
	// create a new campground and save to db
	Campground.create(newCampground, function (err, newlyCreated) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/campgrounds');
		}
	});
});

//New - show form to create new campground
router.get('/new',middleware.isLoggedIn, function (req, res) {
	res.render('campgrounds/new.ejs');
});

// Show- Shows more info about one campground
router.get('/:id', function (req, res) {
	Campground.findById(req.params.id)
		.populate('comments')
		.exec(function (err, foundCampground) {
			if (err) {
				console.log(err);
			} else {
				res.render('campgrounds/show', { campground: foundCampground });
			}
		});
});

// Edit Campground route

router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req, res){		
	Campground.findById(req.params.id, function(err, foundCampground){
		res.render("campgrounds/edit", {campground: foundCampground});
		
	});
});



//Update campground route
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
})

// Destroy Campground Router
router.delete("/:id",middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds");
		}
	}); 
}); 

module.exports = router;