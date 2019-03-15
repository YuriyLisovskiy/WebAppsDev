let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let path = require('path');

let router = require('./routes/index');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'jade');

app.use('/static', express.static('static'));
app.use('/media', express.static('media'));

app.use('/', router);

app.use(function(req, res){
	res.status(404);
	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}
	res.type('txt').send('Not found');
});

app.listen(3000, '127.0.0.1');
