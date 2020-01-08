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

async function add(scheme) {
  const [id] = await db('schemes').insert(scheme);

  return findById(id);
}

// function update(changes, id) {}

async function remove(id) {
  const removedUser = await findById(id);
  await db('schemes')
    .where({ id })
    .del();

  return removedUser;
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
