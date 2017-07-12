var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hero:3egFXK8d7EievQLU@cluster0-shard-00-00-1kgwp.mongodb.net:27017,cluster0-shard-00-01-1kgwp.mongodb.net:27017,cluster0-shard-00-02-1kgwp.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};