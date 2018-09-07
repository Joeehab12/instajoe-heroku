var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var sequelize = require('./db-config/db-config.js');
// var config = require('./config');
var port = 8008;

app.use(express.static(__dirname + '/public/app'));
// app.set('strict routing',true);
// app.set('views', __dirname + '/public');
// app.set('view engine','pug');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/app/login.html');
});
app.get('/register',function(req,res){
    // res.setHeader('Location','/register')
    res.sendFile(__dirname + '/public/app/register.html');
});
app.get('/feed',function(req,res){
    res.sendFile(__dirname + '/public/app/feed.html');
});
app.get('/profile',function(req,res){
    res.sendFile(__dirname + '/public/app/profile.html');
});



app.listen(port,function(){
    console.log('Frontend is live on port ' + port + '...');
});


module.exports = {app:app};
