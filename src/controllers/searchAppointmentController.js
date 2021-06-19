const { searchAppointmentByTreatment } = require('../services/bookService');

async function searchAppointmentController(arg) {
  const books = await searchAppointmentByTreatment(arg);
  books.forEach(({ time, treatment }) => {
    console.log(`zeit:${time} treatment:(${treatment})`);
  });
}

module.exports = searchAppointmentController;
