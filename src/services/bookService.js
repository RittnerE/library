const randomWords = require('random-words');

const { getBooksByName,addAppointment ,addBook, listTreatments, listAppointments,deleteTreatments,addPatient,getAppointmentByTreatment, bookAppointment, appointmentDone, deleteAppointment} = require("../repositories/booksRepository");

async function searchBooksByTitle(title) {
  const books = await getBooksByName(title);

  delete books.meta;
  return books;
}
async function searchAppointmentByTreatment(title) {
  const books = await getAppointmentByTreatment(title);

  delete books.meta;
  return books;
}

async function bookAppointmentByTime(time,id) {
  const books = await bookAppointment(time,id);

  delete books.meta;
  return books;
}

async function setAppointmentDone(time) {
  const books = await appointmentDone(time);

  delete books.meta;
  return books;
}


async function deleteTreatmentById(id) {
  const books = await deleteTreatments(id);

  delete books.meta;
  return books;
}
async function listTreatmentsByTitle() {
  const books = await listTreatments();

  delete books.meta;
  return books;
}
async function listAppointmentsByDate() {
  const books = await listAppointments();

  delete books.meta;
  return books;
}
async function addAppointmentService(patientName, appointmentDate, appointmentId, treatmentId) {
  const books = await addAppointment(patientName, appointmentDate, appointmentId, treatmentId);

  delete books.meta;
  return books;
}
async function deleteAppointmentService(id) {
  const books = await deleteAppointment(id);

  delete books.meta;
  return books;
}

async function addBookService(title, libraryId) {
  const book = await addBook(title, libraryId);

  return book;
}
async function addPatientService(name, email) {
  const book = await addPatient(name,email);

  return book;
}

async function addRandomBooksService() {
  const books = [];
  for (let i = 0; i < 10; i++) {
    const title = randomWords({ exactly: 3, join: ' ' });
    await addBookService(title);
    books.push(title);
  }

  return books;
}

module.exports = {
  searchBooksByTitle,
  addBookService,
  addRandomBooksService,
  listTreatmentsByTitle,
  deleteTreatmentById,
  addPatientService,
  searchAppointmentByTreatment,
  bookAppointmentByTime,
  setAppointmentDone,
  addAppointmentService,
  deleteAppointmentService,
  listAppointmentsByDate
};
