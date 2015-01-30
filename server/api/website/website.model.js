'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SettingSchema = new Schema({
  name: {type:String,required:true},
  description: String,
  address: String,
  contactPhoneNumber:String,
  contactEmailAddress:String
});

module.exports = mongoose.model('Setting', SettingSchema);
