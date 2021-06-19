const { bookAppointmentByTime } = require('../services/bookService');

async function bookAppointmentController(time, id) {
  const { insertId } = await bookAppointmentByTime(time, id);
  console.log(`Treatment is booked`);
}

module.exports = bookAppointmentController;
