const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      park = new Park('name', 'ticket price', 'collection of dinosaurs');

  });

  it('should have a name', function() {
      const actual = park.should.have.a.name;
      assert.strictEqual(actual, 'should have a name');
  });

  it('should have a ticket price', function() {
      const actual = park.ticket;
      assert.strictEqual(actual, 'ticket price');

  });

  it('should have a collection of dinosaurs',function () {
      const actual = park.collection;
      assert.strictEqual(actual,'collection of dinosaurs');
  });

  it('should be able to add a dinosaur to its collection', function() {
        const actual = park.collection.add;
        assert.strictEqual(actual, 'add a dinosaur to its collection');
  });

  it('should be able to remove a dinosaur from its collection', function() {
      const actual = park.collection.remove;
      assert.strictEqual(actual, 'remove a dinosaur from its collection');
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
      const actual = park.find.dinosaur.that.attracts.most.visitors;
      assert.strictEqual(actual, 'find the dinosaur that attracts most visitors');
  });

  it('should be able to find all dinosaurs of a particular species',function() {
        const actual = park.find.all.dinosaurs.of.particual.species;
        assert.strictEqual(actual, 'find all dinosaurs of a particular species');
  });

  it('should be able to calculate the total number of visitors per day', function() {
        const actual = park.calculate.total.number.of.visitors.per.day;
        assert.strictEqual(actual, 'calculate total number of visitors per day');
  });

  it('should be able to calculate the total number of visitors per year', function() {
      const actual = park.calculate.total.number.of.visitors.per.year;
      assert.strictEqual(actual, 'calculate total number of visitors per year');
  });

  it('should be able to calculate total revenue for one year', function () {
      const actual = park.calculate.total.revenue.for.one.year;
      assert.strictEqual(actual, 'calculate total revenue for one year');
  });

});
