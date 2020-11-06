// Load Node modules
var express = require('express');
const ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hiten:dalmia@cinder.otv59.gcp.mongodb.net/cinderuser?retryWrites=true&w=majority";
var path = require('path');
const bodyParser = require('body-parser');



// Initialise Express
var app = express();

// Render static files
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(process.env.PORT || 8080);


// Routing

// Index on start
app.get('/', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cinderuser");
    var query = { fy: "fy" };
    dbo.collection("porps").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.render('pages/index',{
        users: result.length
      });
      db.close();
    });
  });
});

// create-profile
app.get('/create-profile', function (req, res) {
    res.render('pages/create-profile');
});

//Login
app.get('/login', function (req, res) {
    res.render('pages/login');
});

// Index on hyperlink
app.get('/index', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cinderuser");
    var query = { fy: "fy" };
    dbo.collection("porps").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.render('pages/index',{
        users: result.length
      });
      db.close();
    });
  });
});


//html form input and storing in mongodb
app.post('/reg', (req, res) => {
  var myobj = { imglink: req.body.imglink, name: req.body.name, email: req.body.email, password: req.body.password,
  class: req.body.class, section: req.body.section, gender: req.body.gender, 
  insta: req.body.insta, whatsapp: req.body.whatsapp, snapchat: req.body.snapchat, 
  othermedia: req.body.othermedia, interests: req.body.interests, bio: req.body.bio, fy: "fy"};

  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("cinderuser");
    dbo.collection("porps").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      var users = 0;
      users++;
      console.log(users);
      db.close();
    });
  });
  
  res.render('pages/after-reg')
});



//login verification
app.post('/log', function(req,res){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cinderuser");
    var query = { email: req.body.email };
    dbo.collection("porps").find(query).toArray(function(err, result) {
      if (err) throw err;
      var obj = result[0]
      if (result.length === 0) {
        res.render('pages/wrong-login')
      } else if (result.length !== 0) {
        console.log(obj.password);
        if (obj.password !== req.body.password) {
        res.render('pages/wrong-login')
        } else {
          var query = { fy: "fy" };
          dbo.collection("porps").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.render('pages/profiles',{
              data: result
            });
            db.close();
          });
        };
      }
      db.close();
    });
  });
});