var async = require('async');
//import mongoose module
const mongoose = require('mongoose');
//get models
var LiteracyModel = require('./models/literacyRates');
var CoordinatesModel = require('./models/coordinates');
var CountryModel = require('./models/countryData');
var dbController = require('./dbController');
const literacyData = require('./crossCountryLiteracyRates');
const coordinatesData = require('./coordinates');
const countryData = require('./countryData');

//set variables
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;
//set options in case of failure to connect to db
const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

//set up default mongoose connection
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, options);
mongoose.Promise = global.Promise;
//get the default connection
var db = mongoose.connection;
//bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//populating database with data - only need to call this once
function populate(model, data, cb){
   async.parallel([
      function(callback){
         model.insertMany(data);
         console.log('populated')
      }
   ],
   //optional callback
   cb);
};


var results1 = dbController.findByEntity(LiteracyModel, 'Afghanistan');
if(results1==null){
   populate(LiteracyModel, literacyData);
}

var results2 = dbController.findByEntity(CoordinatesModel, 'Afghanistan');
if(results2==null){
   populate(CoordinatesModel, coordinatesData);
}

var results3 = dbController.findByEntity(CountryModel, 'Afghanistan');
if(results3==null){
   populate(CountryModel, countryData);
}
