var Mongoose = require('mongoose');
Mongoose.Promise = require('bluebird');

var db = Mongoose.connect('mongodb://localhost/nodeappdb', { useMongoClient: true }).then(() => console.log('connection with database succeeded'))
    .catch(err => console.error(err));

exports.db = db;