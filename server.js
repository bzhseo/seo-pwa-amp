var mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.get('/', function (req, res) {
    res.render('layout');
});
