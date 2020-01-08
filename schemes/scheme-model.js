const db = require('../data/db-config');

function find() {
  return db('schemes').select();
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.Id')
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({scheme_id: id})
    .orderBy('step_number');
}

async function add(scheme) {
  const [id] = await db('schemes').insert(scheme);

  return findById(id);
}

async function update(changes, id) {
  await db('schemes')
    .where({ id })
    .update(changes);

  return await findById(id);
}

async function remove(id) {
  const removedUser = await findById(id);
  await db('schemes')
    .where({ id })
    .del();

  return removedUser;
}

async function addStep(data, id) {
  const stepData = { scheme_id: id, ...data};

  return db('steps').insert(stepData)
}

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findSteps,
};
