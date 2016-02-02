var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

// set tamplate

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//hello world
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});