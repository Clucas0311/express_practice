// grab the express module by requiring at and add it to the express varible
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const e = require('express');
// to create an express application call express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// to use the pug method use app.set

app.set('view engine', 'pug');

// app.use((req, res, next) => {
// 	console.log('Hello');
// 	const err = new Error('Oh noes!');
// 	next(err);
// });

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(500);
	res.render('error', err);
});
// set up the z                                                                                                 development server
// const PORT = 3000;
app.listen(3000, () => {
	console.log('The Application is Running On localhost 3000!');
});
