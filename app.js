var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var port = process.env.PORT || 1337;
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/gage', indexController.index);

app.get('/mikael', indexController.mikael);

app.post('/submit', indexController.submit);

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
