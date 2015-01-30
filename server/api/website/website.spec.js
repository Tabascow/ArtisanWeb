'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Website = require('./website.model.js');

var website = new Website({
  name:'Artisan',
  description:'Description simple',
  contactEmailAddress:'artisan@web.fr',
  contactPhoneNumber:'060000000'
})

describe('GET /api/websites', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/websites')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('Website', function(){
  before (function(done){
    Website.remove().exec().then(function(){
      done();
    })
  });

  afterEach(function(done) {
    Website.remove().exec().then(function() {
      done();
    });
  });

  it('Should fail when saving without name',function(done){
    website.name='';
    website.save(function(err){
      should.exist(err);
      done();
    })
  });

});
