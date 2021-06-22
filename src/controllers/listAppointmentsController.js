const { listAppointmentsByDate } = require('../services/bookService');

async function listAppointmentsController() {
    const books = await listAppointmentsByDate();
    books.forEach(({ time, patient }) => {
        console.log(`appointment at "${time}" for patient "${patient}"`);
    });
}

module.exports = listAppointmentsController;
