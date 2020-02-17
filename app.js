const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodoverride = require('method-override');
const redis = require('redis');

// Set Port
const port = 3000;

// Initialize App
const app = express()

// Set up view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// methodOverride
app.use(methodoverride('_method'));

app.get('/', function(req, res, next) {
    res.render('searchUsers');
});

app.listen(port, function() {
    console.log('Server started on port' + port)
})