module.exports.file = function(req,res,next){
    var upload = require('../routes/routes.js').upload;
    upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      res.json({status: "failed",message: "The following error has occurred." + err});
      return
    }
    else{
        // Everything went fine
        
        res.json({status:"success", message: "File uploaded successfully."});
    }
  })
}
