const db = require('../data/db-config');

function find() {
  return db('schemes').select();
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

// function findSteps(id) {}

function add(scheme) {
  return db('schemes').insert(scheme);
}

// function update(changes, id) {}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  add,
  remove,
};

// findSteps,
//   add,
//   update,
//   remove,
