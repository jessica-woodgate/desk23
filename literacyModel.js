//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var LiteracyModelSchema = new Schema({
  Country: String,
  Code: String,
  Year: Integer,
  LiteracyRates: Double
});

// Compile model from schema
//var LiteracyModel = mongoose.model('LiteracyModel', LiteracyModelSchema );
module.exports = mongoose.model('LiteracyModel', LiteracyModelSchema);
