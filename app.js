// grab the express module by requiring at and add it to the express varible
const express = require('express');

// to create an express application call express
const app = express();

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// to use the pug method use app.set

app.set('view engine', 'pug');

// HTTP verb - because it represents what the client what the user wants to do
// route route - indicate it with the / in the first parameter,
// second parameter will take in anonymous call back a request and response
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/card', (req, res) => {
	res.render('card', { prompt: "Who is buried in Grant's tomb?", colors });
});

app.get('/hello', (req, res) => {
	res.render('hello');
});
// set up the development server
// const PORT = 3000;
app.listen(3000, () => {
	console.log('The Application is Running On localhost 3000!');
});
