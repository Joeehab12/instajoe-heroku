//list our modules
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dest = 'instajoe-frontend/public/app/views/assets/' + req.params.id;
        mkdirp.sync(dest);
        cb(null, dest);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage }).single('file_browse');

var router = function(app){
    //list our controllers
    var loginController = require('../controllers/loginController');
    var registerController = require('../controllers/registerController')
    var fileController = require('../controllers/fileController');
    var photoController = require('../controllers/photoController');
    var fetchController = require('../controllers/fetchController');
    //list our middlewares
    var loginMiddleware = require('../middlewares/loginMiddleware');

    //list our routes
    app.post('/login',loginController.login);
    app.post('/register',registerController.register);
    app.use(loginMiddleware.middle);
    app.post('/upload/:id',fileController.file);
    app.post('/photo/:id',photoController.photo);
    app.get('/photos/:id',fetchController.fetch);
    app.use(function(req,res){
        res.status(404).json({status:"failed",message: "The requested route is not found."});
    });
}
module.exports = {
    upload:upload,
    router:router
}
