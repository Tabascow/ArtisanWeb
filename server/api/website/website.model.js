'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SettingSchema = new Schema({
  name: {type:String,required:true},
  description: String,
  address: String,
  contactPhoneNumber:String,
  contactEmail:String,
  createdAt:{type:String,default:Date.now}
});

module.exports = mongoose.model('Website', SettingSchema);
