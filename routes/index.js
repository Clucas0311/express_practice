const express = require('express');
const router = express.Router();

// HTTP verb - because it represents what the client what the user wants to do
// route route - indicate it with the / in the first parameter,
// second parameter will take in anonymous call back a request and response
router.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	}
});

router.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	}
	res.render('hello');
});
// when you need to change something
router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});
router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

module.exports = router;
