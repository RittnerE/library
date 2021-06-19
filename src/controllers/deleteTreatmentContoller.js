const { deleteTreatmentById } = require('../services/bookService');

async function deleteTreatmentController(id) {
  const { insertId } = await deleteTreatmentById(id);
  console.log(`delete treatment with ID ${id}.`);
}

module.exports = deleteTreatmentController;
