var mongoose = require('mongoose');

//define a schema
var Schema = mongoose.Schema;

var CoordinatesSchema = new Schema({
   Country: {type: String, required: true, maxlength: 100},
   Languages: {type: String, required: false, maxlength: 1000},
   latitude: {type: Number},
   longitude: {type: Number},
   Region: {type: String, required: false, maxlength: 1000},
   Population: {type: Number},
   Area_sq_mi: {type: Number},
   GPD_per_capita: {type: Number},
   Climate: {type: String, required: false, maxlength: 100}
})

//Compile model from schema & export
module.exports = mongoose.model('CoordinatesModel', CoordinatesSchema);
