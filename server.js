var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var sequelize = require('./db-config/db-config.js');
var config = require('./config');
var port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('superSecret',config.secret);

require('./routes/routes.js').router(app);


app.listen(port,function(){
    console.log('Magic is happening on port ' + port + '...');
});


module.exports = {app:app};
