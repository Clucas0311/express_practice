// grab the express module by requiring at and add it to the express varible
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const e = require('express');
// to create an express application call express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// to use the pug method use app.set

app.set('view engine', 'pug');

app.use(
	(req, res, next) => {
		req.message = 'This message made it!';
		next();
	},
	(req, res, next) => {
		console.log(req.message);
		next();
	}
);
app.use((req, res, next) => {
	console.log('Two');
	next();
});

// HTTP verb - because it represents what the client what the user wants to do
// route route - indicate it with the / in the first parameter,
// second parameter will take in anonymous call back a request and response
app.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	}
});

app.get('/card', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's tomb?", colors });
});

app.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	}
	res.render('hello');
});
// when you need to change something
app.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});
app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});
// set up the z                                                                                                 development server
// const PORT = 3000;
app.listen(3000, () => {
	console.log('The Application is Running On localhost 3000!');
});
