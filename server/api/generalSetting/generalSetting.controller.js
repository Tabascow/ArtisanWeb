'use strict';

var _ = require('lodash');
var Generalsetting = require('./generalSetting.model');

// Get list of generalSettings
exports.index = function(req, res) {
  Generalsetting.find(function (err, generalSettings) {
    if(err) { return handleError(res, err); }
    return res.json(200, generalSettings);
  });
};

// Get a single generalSetting
exports.show = function(req, res) {
  Generalsetting.findById(req.params.id, function (err, generalSetting) {
    if(err) { return handleError(res, err); }
    if(!generalSetting) { return res.send(404); }
    return res.json(generalSetting);
  });
};

// Creates a new generalSetting in the DB.
exports.create = function(req, res) {
  Generalsetting.create(req.body, function(err, generalSetting) {
    if(err) { return handleError(res, err); }
    return res.json(201, generalSetting);
  });
};

// Updates an existing generalSetting in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Generalsetting.findById(req.params.id, function (err, generalSetting) {
    if (err) { return handleError(res, err); }
    if(!generalSetting) { return res.send(404); }
    var updated = _.merge(generalSetting, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, generalSetting);
    });
  });
};

// Deletes a generalSetting from the DB.
exports.destroy = function(req, res) {
  Generalsetting.findById(req.params.id, function (err, generalSetting) {
    if(err) { return handleError(res, err); }
    if(!generalSetting) { return res.send(404); }
    generalSetting.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}