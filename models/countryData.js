//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CountryDataSchema = new Schema({
  Entity: {type: String, required: true, maxlength: 100},
  Code: {type: String, required: false, maxlength: 100},
  Year: {type: Number},
  Data: {type: Number},
  Latitude: {type: Number},
  Longitude: {type: Number},
  Area: {type: Number}
});

// Compile model from schema & export
module.exports = mongoose.model('CountryData', CountryDataSchema);
