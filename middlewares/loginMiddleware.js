module.exports.middle = function(req,res,next){
    var jwt = require('jsonwebtoken');
    var app = require('../server');
    var token = req.body.token || req.headers['token'] || req.query.token;
    if (token){
        jwt.verify(token,app.app.get('superSecret'),function(err,decoded){
            if (err){
                return res.status(200).json({status: "failed" ,message:"Failed to authenticate token."});
            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        return res.status(403).json({status: "failed",message: "No token provided."});
    }
}
