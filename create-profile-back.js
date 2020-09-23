var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hiten:dalmia@cinder.otv59.gcp.mongodb.net/cinderuser?retryWrites=true&w=majority";
var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser');


app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); 


//html form input and storing in mongodb
app.post('/reg', (req, res) => {
  res.send(`Full name is:${req.body.name}, ${req.body.email}, ${req.body.class} ${req.body.section}, ${req.body.gender}, ${req.body.insta}, ${req.body.whatsapp}, ${req.body.snapchat}, ${req.body.othermedia}, ${req.body.insterests}, ${req.body.bio}.`);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cinderuser");
    var myobj = { name: req.body.name, email: req.body.email,
       class: req.body.class, section: req.body.section, gender: req.body.gender, insta: req.body.insta, whatsapp: req.body.whatsapp, snapchat: req.body.snapchat, othermedia: req.body.othermedia, interests: req.body.interests, bio: req.body.bio};
    dbo.collection("porps").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});


//html render
app.get('/', function(request, response){
  response.sendFile('E:\\Hiten\\Projects\\HTML Projects\\Cinder\\create-profile.html');
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );