'use strict';

var app = require('../..');
import request from 'supertest';

var newTravel;

describe('Travel API:', function() {

  describe('GET /api/travels', function() {
    var travels;

    beforeEach(function(done) {
      request(app)
        .get('/api/travels')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          travels = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      travels.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/travels', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/travels')
        .send({
          name: 'New Travel',
          info: 'This is the brand new travel!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTravel = res.body;
          done();
        });
    });

    it('should respond with the newly created travel', function() {
      newTravel.name.should.equal('New Travel');
      newTravel.info.should.equal('This is the brand new travel!!!');
    });

  });

  describe('GET /api/travels/:id', function() {
    var travel;

    beforeEach(function(done) {
      request(app)
        .get('/api/travels/' + newTravel._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          travel = res.body;
          done();
        });
    });

    afterEach(function() {
      travel = {};
    });

    it('should respond with the requested travel', function() {
      travel.name.should.equal('New Travel');
      travel.info.should.equal('This is the brand new travel!!!');
    });

  });

  describe('PUT /api/travels/:id', function() {
    var updatedTravel;

    beforeEach(function(done) {
      request(app)
        .put('/api/travels/' + newTravel._id)
        .send({
          name: 'Updated Travel',
          info: 'This is the updated travel!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTravel = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTravel = {};
    });

    it('should respond with the updated travel', function() {
      updatedTravel.name.should.equal('Updated Travel');
      updatedTravel.info.should.equal('This is the updated travel!!!');
    });

  });

  describe('DELETE /api/travels/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/travels/' + newTravel._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when travel does not exist', function(done) {
      request(app)
        .delete('/api/travels/' + newTravel._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
