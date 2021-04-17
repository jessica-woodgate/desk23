var async = require('async');
var LiteracyModel = require('./models/literacyRates');
//import mongoose module
const mongoose = require('mongoose');
const crossCountryLiteracyRates = require('./crossCountryLiteracyRates');

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

//populating database with data
function createLiteracyRates(cb){
   async.parallel([
      function(callback){
         LiteracyModel.insertMany(crossCountryLiteracyRates);
      }/*,*/
      //checking that the data has been uploaded (remove when testing unnecessary)
      /*function(callback){
         LiteracyModel.find({'Entity':'World'}, 'Entity Code Data', function(err, results){
            if(err) {
               return handleError(err)
            }else{
               console.log(results);
            }
         })*/
      //}
   ],
   //optional callback
   cb);
}

var query;

function getLiteracyRates(cb){
      async.parallel([
         function(callback){
            query = LiteracyModel.find({});
         }
      ],
      cb);
}

async.series([
   createLiteracyRates,
],
//optional callback
function(err, results) {
   if(err){
      console.log('FINAL ERR: '+err);
   }else{
      console.log('LiteracyRates: '+results);
   }
   // All done, disconnect from database
    mongoose.connection.close();
});
