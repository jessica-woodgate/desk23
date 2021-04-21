var async = require('async');
var LiteracyModel = require('./models/literacyRates');
var CoordinatesModel = require('./models/coordinates');
//import mongoose module
const mongoose = require('mongoose');
const crossCountryLiteracyRates = require('./crossCountryLiteracyRates');
const coordinatesData = require('./coordinates');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

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
function createLiteracyRates(cb){
   async.parallel([
      function(callback){
         LiteracyModel.insertMany(crossCountryLiteracyRates);
      },
      //checking that the data has been uploaded (remove when testing unnecessary)
      function(callback){
         LiteracyModel.find({}, function(err, results){
            if(err) {
               return console.log(err);
            }else{
               console.log(results);
            }
         })
      }
   ],
   //optional callback
   cb);
}

function createCoordinates(cb){
   async.parallel([
      function(callback){
         CoordinatesModel.insertMany(coordinatesData);
      },
      function(callback){
         CoordinatesModel.find({}, function(err, results){
            if(err) {
               return console.log(err);
            }else{
               console.log(results);
            }
         })
      }
   ])
}

async.series([
   //createCoordinates
],
//optional callback
function(err, results) {
   if(err){
      console.log('FINAL ERR: '+err);
   }/*else{
      console.log('LiteracyRates: '+results);
   }*/
   // All done, disconnect from database
   //mongoose.connection.close();
});

module.exports.LiteracyModel = LiteracyModel;
module.exports.CoordinatesModel = CoordinatesModel;
