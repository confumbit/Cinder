var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser');


app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); 


//html render
app.get('/', function(request, response){
    response.sendFile('/index.html');
  });
  
  app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );