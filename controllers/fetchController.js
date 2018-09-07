module.exports.fetch = function(req,res,next){
    var sequelizeInstance = require('../db-config/db-config.js');
    var sequelize = sequelizeInstance.sequelize;
    var Sequelize = sequelizeInstance.Sequelize;
    var photo = require('../models/photo')(sequelize,Sequelize);
    photo.findAll({ where: { user_id: req.params.id } }).then(function(photos){
        if (photos){
            res.status(200).json({status:"success",message: "Fetched all user's photos successfully.",photos: photos});
        }
        else{
            res.status(200).json({status:"success",message: "User has no photos."});
        }
    });

}
