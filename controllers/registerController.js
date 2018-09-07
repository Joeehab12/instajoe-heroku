module.exports.register = function(req,res,next){
    var sequelizeInstance = require('../db-config/db-config.js');
    var sequelize = sequelizeInstance.sequelize;
    var Sequelize = sequelizeInstance.Sequelize;
    var user = require('../models/user')(sequelize,Sequelize);
    var newUser = user.build(
        {
            username: req.body.username,
            password: req.body.password,
            fullName: req.body.fullName,
            email: req.body.email,
            profilePic: "http://localhost:8008/assets/default-user.png"
        }
    );
    user.findAndCountAll({where: {username: req.body.username , $or: [{email: req.body.email}]} }).then(function(result){
        if (result.count == 0){
            newUser.save().then(function(){
                res.status(200).json({status: "success", message: "user registered successfully."});
            })
            .catch(function(err){
                res.status(200).json({status: "failed",message: "cannot register user. An error has ocurred." + err});
            });
        }
        else{
            res.status(200).json({status: "failed",message: "This username/email already exists."});
        }
    });
}
