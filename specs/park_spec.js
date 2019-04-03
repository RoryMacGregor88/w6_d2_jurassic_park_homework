const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Brontosaurus', 'herbivore', 75);
    dinosaur2 = new Dinosaur('Dilophosaurus', 'omnivore', 50);
    dinosaur3 = new Dinosaur('T-Rex', 'carnivore', 100);
    dinosaur4 = new Dinosaur('Stegasaurus', 'carnivore', 90);
    park = new Park('Jurassic Park', 25);
    park.dinosaurCollection.push(dinosaur1, dinosaur2, dinosaur3);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostVisitors()
    assert.deepStrictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findBySpecies('Brontosaurus');
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.deleteAllOfSpecies('T-Rex');
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 2)
  });

  it('should be able to calculate total visitors per day', function() {
    const actual = park.visitorsPerDay()
    assert.deepStrictEqual(actual, 225)
  });

  it('should be able to calculate total visitors per year', function() {
    const actual = park.visitorsPerYear()
    assert.deepStrictEqual(actual, 82125)
  });

  it('should be able to calculate total revenue per year', function() {
    const actual = park.revenuePerYear()
    assert.equal(actual, 2053125)
  });

});
