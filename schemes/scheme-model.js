const db = require('../data/schemes.db3');

function find() {
  return db('users');
}

function findById(id) {
  return db.('users').where({ id }).first();
}

function findSteps(id) {
  
}

function add(scheme) {
  
}

function update(changes, id) {
  
}

function remove(id) {
  
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}