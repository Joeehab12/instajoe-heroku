module.exports.photo = function(req,res,next){
    var sequelizeInstance = require('../db-config/db-config.js');
    var sequelize = sequelizeInstance.sequelize;
    var Sequelize = sequelizeInstance.Sequelize;
    var photo = require('../models/photo')(sequelize,Sequelize);
    var normalizedDate = new Date(Date.now()).toISOString();
    var date = new Date(Date.now());
    var newPhoto = photo.build(
        {
            user_id: req.params.id,
            caption: req.body.caption,
            location: req.body.location,
            photo_url: req.body.url,
            date_created: date
        }
    );

    newPhoto.save().then(function(){
        res.status(200).json({status: "success", message: "Your photo has been succesfully uploaded."});
    })
    .catch(function(err){
        res.status(200).json({status: "failed",message: "Cannot upload photo. An error has ocurred."});
        console.log(err);
    });
}
