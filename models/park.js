const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = []
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurCollection.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur) {
  for (var i = 0; i < this.dinosaurCollection.length; i++) {
    if (this.dinosaurCollection[i].species === dinosaur.species)
    this.dinosaurCollection.splice(i, 1)
  }
}

Park.prototype.mostVisitors = function() {
  let mostGuests = 0;
  let dinosaur = '';
  for (var i = 0; i < this.dinosaurCollection.length; i++) {
    if(this.dinosaurCollection[i].guestsAttractedPerDay > mostGuests)
      mostGuests = this.dinosaurCollection[i].guestsAttractedPerDay
      dinosaur = this.dinosaurCollection[i]
  };
  return dinosaur;
};

Park.prototype.findBySpecies = function(species) {
  dinosaurs = []
  for (var i = 0; i < this.dinosaurCollection.length; i++) {
    if (this.dinosaurCollection[i].species === species)
      dinosaurs.push(this.dinosaurCollection[i])
  }
  return dinosaurs;
};

Park.prototype.deleteAllOfSpecies = function(species) {
  extinctDinosaurs = this.findBySpecies(species);
  for (var i = 0; i < extinctDinosaurs.length; i++) {
    this.removeDinosaur(extinctDinosaurs[i])
  }
};

Park.prototype.visitorsPerDay = function() {
  total = 0
  for (var i = 0; i < this.dinosaurCollection.length; i++) {
    total += this.dinosaurCollection[i].guestsAttractedPerDay
  };
  return total;
};

Park.prototype.visitorsPerYear = function() {
  total = 0
  for (var i = 0; i < this.dinosaurCollection.length; i++) {
    total += this.dinosaurCollection[i].guestsAttractedPerDay
  };
  return total * 365;
};

Park.prototype.revenuePerYear = function() {
  return (this.visitorsPerYear() * this.ticketPrice);
};

module.exports = Park;
