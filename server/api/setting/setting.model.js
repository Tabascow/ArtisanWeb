'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SettingSchema = new Schema({
  name: String,
  description: String,
  address: String,
  contactPhoneNumber:String,
  contactEmailAddress:String,
  active: Boolean
});

module.exports = mongoose.model('Setting', SettingSchema);
