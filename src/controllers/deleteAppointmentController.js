const { deleteAppointmentService } = require('../services/bookService');

async function deleteTreatmentController(id) {
    const { insertId } = await deleteAppointmentService(id);
    console.log(`deleted appointment with ID ${id}.`);
}

module.exports = deleteTreatmentController;
