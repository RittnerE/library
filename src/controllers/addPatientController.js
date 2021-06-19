const { addPatientService } = require('../services/bookService');

async function addPatientController(name,email) {
  const books = await addPatientService(name, email);

    console.log(`add Patient`);

}

module.exports = addPatientController;
