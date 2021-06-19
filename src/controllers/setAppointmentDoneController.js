const { setAppointmentDone } = require('../services/bookService');

async function setAppointmentDoneController(time, id) {
  const { insertId } = await setAppointmentDone(time, id);
  console.log(`Treatment is set to done`);
}

module.exports = setAppointmentDoneController;
