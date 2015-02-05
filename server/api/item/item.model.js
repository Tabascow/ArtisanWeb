'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var CategorySchema = require('../category/category.model');

var ItemSchema = new Schema({
  name: {type:String,required:true},
  shortDescription:{type:String},
  description:{type:String},
  createdAt:{type:String},
  producedAt:{type:String},
  categories:[{type:Schema.Types.ObjectId,ref:'Category'}]
});


module.exports = mongoose.model('Item', ItemSchema);
