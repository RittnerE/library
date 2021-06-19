const searchBooksController = require("./controllers/booksSearchController");
const addBookController = require('./controllers/addBookController');
const addRandomBooksController = require('./controllers/addRandomBooksController');
const listTreatmentsController = require('./controllers/listTreatmentsController.js');
const deleteTreatmentController = require('./controllers/deleteTreatmentContoller.js');
const addPatientController = require('./controllers/addPatientController');
const searchAppointmentController = require('./controllers/searchAppointmentController');
const bookAppointmentController = require('./controllers/bookAppointmentController');
const setAppointmentDoneController = require('./controllers/setAppointmentDoneController');
const { createConnectionPool, closeConnectionPool } = require('./repositories/db');

const command = process.argv[2];
const value = process.argv[3];
const value2 = process.argv[4];

createConnectionPool().then(async () => {
  switch (command) {
    case 'search-book':
      await searchBooksController(value);
      break;
    case 'add-treatment':
      await addBookController(value, value2);
      break;
    case 'add-random-books':
      await addRandomBooksController();
      break;
    case 'list-treatments':
      await listTreatmentsController();
      break;
    case 'delete-treatment':
      await deleteTreatmentController(value);
      break;
    case 'register-patient':
      await addPatientController(value,value2);
      break;
    case 'search-appointment':
      await searchAppointmentController(value);
      break;
    case 'book-appointment':
      await bookAppointmentController(value,value2);
      break;
    case 'appointment-done':
      await setAppointmentDoneController(value);
      break;
    default:
      console.error('Unsupported command.');
  }

  closeConnectionPool().then(() => {
  });

});
