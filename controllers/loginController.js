module.exports.login = function(req,res,next){
    var sequelizeInstance = require('../db-config/db-config.js');
    var app = require('../server');
    var sequelize = sequelizeInstance.sequelize;
    var Sequelize = sequelizeInstance.Sequelize;
    var User = require('../models/user.js')(sequelize,Sequelize);
    var jwt = require('jsonwebtoken');
    var jwt_decode
    console.log('User email: ' + req.body.email);
    User.findOne( {where: {email: req.body.email}}).then(function(user){
        // console.log(user);
        if (user){
            if (user.password == req.body.password){
                const payload = {
                    id: user.user_id,
                    username: user.username,
                    fullName: user.fullName,
                    profilePic: user.profilePic
                };
                var token = jwt.sign(payload, app.app.get('superSecret'), {
                    expiresIn: 1440 // expires in 24 hours
                });
                res.status(200).json({status: "success",token: token,message: "Enjoy your token."});
            }
            else{
                res.status(200).json({status: "Failed",message: "Incorrect Password."});
            }
        }
        else{
            res.status(200).json({status: "failed" ,message: "Cannot find user with specified email address."});
        }
    });
}
