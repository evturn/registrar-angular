var User   = require('../models/user');
var jwt  	 = require('jsonwebtoken');
var config = require('../../config');

var superSecret = config.secret;

module.exports = function(app, express) {

	var apiRouter = express.Router();

	//authenticate a user
	apiRouter.post('/authenticate', function(req, res) {
		console.log(req.body.username);
	})

};