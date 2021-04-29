var async = require('async');
//import models
var LiteracyModel = require('./models/literacyRates');
var CoordinatesModel = require('./models/coordinates');
var CountryModel = require('./models/countryData');
//require all models - if require whole folder, will look for index file and import that
var db = require('./models/literacyRates');
//import mongoose module
const mongoose = require('mongoose');
//import data files
const crossCountryLiteracyRates = require('./crossCountryLiteracyRates');
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
      }
   ],
   //optional callback
   cb);
};

//populating literacy database with data - only need to call this once
function createLiteracyRates(cb){
   async.parallel([
      function(callback){
         LiteracyModel.insertMany(crossCountryLiteracyRates)
      },
   ],
   //optional callback
   cb);
}

//populating literacy database with data - only need to call this once
function createCoordinates(cb){
   async.parallel([
      function(callback){
         CoordinatesModel.insertMany(coordinatesData)
      },
   ],
   //optional callback
   cb);
}

function checkLiteracyRates(cb){
   //checking that the data has been uploaded (remove when testing unnecessary)
   async.parallel([
      function(callback){
         LiteracyModel.find({'Entity':'Afghanistan'}, function(err, results){
            if(err) {
               return handleError(err)
            }else{
               console.log(results);
            }
         })
      }
   ],
   cb)
}

//populating country database with data - only need to call this once
function createCountryData(cb){
   async.parallel([
      function(callback){
         CountryModel.insertMany(countryData)
      },
   ],
   //optional callback
   cb);
}

function checkCountryData(cb){
   //checking that the data has been uploaded (remove when testing unnecessary)
   async.parallel([
      function(callback){
         CountryModel.find({'Entity':'Afghanistan'}, function(err, results){
            if(err) {
               return handleError(err)
            }else{
               console.log(results);
            }
         })
      }
   ],
   cb)
}

async.series([
   createLiteracyRates,
   //checkLiteracyRates,
   createCountryData,
   //checkCountryData
   createCoordinates
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

//exporting and labelling models so we can use them in other files
module.exports.LiteracyModel = LiteracyModel;
module.exports.CoordinatesModel = CoordinatesModel;
module.exports.CountryModel = CountryModel;
