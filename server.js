var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var fs = require('fs');
var hand = require('express-handlebars');

// database connection



// setting up my engine for my views.
app.engine('handlebars', hand({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

app.listen(app.get('port'), () => {
  console.log('Server up! into port: 3000');
});