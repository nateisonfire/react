var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
  mongoose = require('mongoose'),
  Task = require('./service/models/apiModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./service/routes/apiRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);