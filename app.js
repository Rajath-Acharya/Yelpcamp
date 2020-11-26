var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  Campground = require("./models/campground"),
  methodOverride = require("method-override"),
  User = require("./models/user"),
  seedDB = require("./seeds"),
  Comment = require("./models/comment"),
  flash = require("connect-flash");

//requiring routes
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

//seedDB(); //seed the DB

mongoose.connect(
  "mongodb+srv://Rajath:Rajath@Atlas@68@cluster0.skzmd.mongodb.net/Yelpcamp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(
  require("express-session")({
    secret: "a for banana",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");

  next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log("Server has started");
});
