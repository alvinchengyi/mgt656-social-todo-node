var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');

// configure our app

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true })); 


//main page
app.get('/', function (req, res) {
    res.render('index');
});

//register page

app.post('/user/register', function (req, res) {
  res.send(req.body);
  console.log('The user has the email address', req.body.email);
});

//receive message from server
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});