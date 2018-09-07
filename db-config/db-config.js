var Sequelize = require('sequelize');
var sequelize = new Sequelize('instajoedb','joeehab12','clevelandrocksG-2',{
    host: 'www.db4free.net',
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate().then(function(err){
    if (err){
        console.log('There is an error in connection : ' + err);
    }
    else{
        console.log('Connection has been established successfully');
    }
});

module.exports = {sequelize:sequelize,Sequelize:Sequelize};
