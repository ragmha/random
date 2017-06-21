var faker = require('faker');
var _ = require('lodash');

function people() {
  return {
    people: _.times(100, n => ({id: n, name: faker.name.findName()})),
  };
}

function places() {
  return {
    places: _.times(100, n => ({id: n, title: faker.address.city()})),
  };
}

module.exports = places;
