const { listTreatmentsByTitle } = require('../services/bookService');

async function listTreatmentsController(arg) {
  const books = await listTreatmentsByTitle(arg);
  books.forEach(({ name, id }) => {
    console.log(`name:${name} id:(${id})`);
  });
}

module.exports = listTreatmentsController;
