const { addAppointmentService } = require('../services/bookService');

async function addAppointmentController(patientName, appointmentId, treatmentId) {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    console.log(cDay + "." + cMonth + "." + cYear);
    const { insertId } = await addAppointmentService(patientName, currentDate, appointmentId, treatmentId);
    console.log(`New appointment added: "${patientName}${currentDate}".`);
}

module.exports = addAppointmentController;
