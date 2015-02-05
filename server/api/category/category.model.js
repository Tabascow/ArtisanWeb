'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  items:[{type:Schema.Types.ObjectId,ref:'Item'}]
});

module.exports = mongoose.model('Category', CategorySchema);
