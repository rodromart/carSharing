'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var travelCtrlStub = {
  index: 'travelCtrl.index',
  show: 'travelCtrl.show',
  create: 'travelCtrl.create',
  update: 'travelCtrl.update',
  destroy: 'travelCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var travelIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './travel.controller': travelCtrlStub
});

describe('Travel API Router:', function() {

  it('should return an express router instance', function() {
    travelIndex.should.equal(routerStub);
  });

  describe('GET /api/travels', function() {

    it('should route to travel.controller.index', function() {
      routerStub.get
        .withArgs('/', 'travelCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/travels/:id', function() {

    it('should route to travel.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'travelCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/travels', function() {

    it('should route to travel.controller.create', function() {
      routerStub.post
        .withArgs('/', 'travelCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/travels/:id', function() {

    it('should route to travel.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'travelCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/travels/:id', function() {

    it('should route to travel.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'travelCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/travels/:id', function() {

    it('should route to travel.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'travelCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
