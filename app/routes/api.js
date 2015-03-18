var User   = require('../models/user');
var jwt  	 = require('jsonwebtoken');
var config = require('../../config');

var superSecret = config.secret;

module.exports = function(app, express) {

};