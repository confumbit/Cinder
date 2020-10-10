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

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/create-profile', function (req, res) {
    res.render('pages/create-profile');
});
app.get('/login', function (req, res) {
    res.render('pages/login');
});

//html form input and storing in mongodb
app.post('/reg', (req, res) => {
    res.send(`Full name is:${req.body.name}, ${req.body.email}, ${req.body.class} 
    ${req.body.section}, ${req.body.gender}, ${req.body.insta}, ${req.body.whatsapp}, 
    ${req.body.snapchat}, ${req.body.othermedia}, ${req.body.interests}, ${req.body.bio}.`);
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("cinderuser");
      var myobj = { name: req.body.name, email: req.body.email,
         class: req.body.class, section: req.body.section, gender: req.body.gender, 
         insta: req.body.insta, whatsapp: req.body.whatsapp, snapchat: req.body.snapchat, 
         othermedia: req.body.othermedia, interests: req.body.interests, bio: req.body.bio};
      dbo.collection("porps").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        var users = 0;
        users++;
        console.log(users);
        db.close();
      });
    });
});

//login verification
app.post('/log', function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cinderuser");
        var query = { email: req.body.email };
        dbo.collection("porps").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log(result.length)
          if (result.length == 0) {
              res.render('pages/wrong-login')
          } else {
            res.render('pages/create-profile');
          };
          db.close();
        });
    });
});