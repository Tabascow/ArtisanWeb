'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: {type:String,required:true},
  shortDescription:{type:String},
  description:{type:String},
  createdAt:{type:String},
  producedAt:{type:String}
});

module.exports = mongoose.model('Item', ItemSchema);
