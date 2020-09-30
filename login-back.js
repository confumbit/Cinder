var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hiten:dalmia@cinder.otv59.gcp.mongodb.net/cinderuser?retryWrites=true&w=majority";
var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser');


app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); 


//html render
app.get('/', function(request, response){
    response.sendFile('/login.html');
  });
  
  app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );


  //login verification
  app.post('/login', function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cinderuser");
        var query = { email: req.body.email };
        dbo.collection("porps").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log(result.length)
          if (result.length == 0) {
              res.sendFile('/wronglogin.html')
          } else {
            res.sendFile('/create-profile-back.html');
          };
          db.close();
        });
      });
  });