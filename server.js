// Template
const Mustache = require('mustache');
const { resolve } = require('path');
const layout = require('fs').readFileSync(
	resolve(__dirname, 'layout.html'),
	'utf8'
);

// http server
const express = require('express');
const app = express();

// config
const port = process.env.PORT || 8080;

// routes
app.get('/', function(req, res) {
	res.send(Mustache.render(layout, req));
});

app.listen(port, () => console.log('Example app listening on port %s!', port));
