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

// function add(scheme) {}

// function update(changes, id) {}

// function remove(id) {}

module.exports = {
  find,
  findById,
};

// findSteps,
//   add,
//   update,
//   remove,
