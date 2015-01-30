'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GeneralsettingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Generalsetting', GeneralsettingSchema);