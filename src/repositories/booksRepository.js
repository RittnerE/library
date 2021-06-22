const {getConnection} = require('./db');

async function getBooksByName(title) {
    let conn;
    try {
        conn = await getConnection();
        const book = await conn.query(
            'SELECT books.title AS book_title, libraries.name AS library_name FROM books LEFT JOIN libraries ON libraries.id = books.library_id WHERE books.title = ?',
            [title]
        );

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function getAppointmentByTreatment(title) {
    let conn;
    try {
        conn = await getConnection();
        const book = await conn.query(
            'SELECT appointment.time AS time, treatment.name AS treatment FROM treatment LEFT JOIN appointment ON treatment.id = appointment.treatment WHERE treatment.name = ? AND appointment.patient is null',
            [title]
        );

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function listTreatments() {
    let conn;
    try {
        conn = await getConnection();
        const book = await conn.query(
            'SELECT * from treatment'
        );

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function listAppointments() {
    let conn;
    try {
        conn = await getConnection();
        const book = await conn.query(
            'SELECT * from appointment'
        );

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function addBook(title, libraryId) {
    let conn;
    try {

        conn = await getConnection();
        const book = await conn.query('INSERT INTO treatment (id, name) VALUES (?, ?)', [libraryId, title]);

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function addPatient(name, email) {
    let conn;
    try {

        conn = await getConnection();
        const book = await conn.query('INSERT INTO patient ( name, email) VALUES (?, ?)', [name, email]);

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function bookAppointment(time, id) {
    let conn;
    try {

        conn = await getConnection();
        const book = await conn.query('UPDATE appointment set patient = (?) WHERE time = (?) ', [id, time]);

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function appointmentDone(time) {
    let conn;
    try {

        conn = await getConnection();
        const book = await conn.query('UPDATE appointment set done = 1 WHERE time = (?) ', [time]);

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}


async function addAppointment(patientName, appointmentDate, appointmentId, treatmentId) {
    let conn;
    try {

        conn = await getConnection();
        const book = await conn.query(
            'INSERT INTO appointment (patient, time, id, treatment) VALUES (?, ?, ?, ?)',
            [patientName, appointmentDate, appointmentId, treatmentId]);

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}


async function deleteTreatments(id) {
    let conn;
    try {
        conn = await getConnection();
        const book = await conn.query(
            'DELETE from treatment WHERE treatment.id = ?',
            [id]
        );

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

async function deleteAppointment(id) {
    let conn;
    try {
        conn = await getConnection();
        const book = await conn.query(
            'DELETE from appointment WHERE appointment.id = ?',
            [id]
        );

        return book;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close(); //release to pool
    }
}

module.exports = {
    getBooksByName,
    addBook,
    listTreatments,
    deleteTreatments,
    addPatient,
    getAppointmentByTreatment,
    bookAppointment,
    appointmentDone,
    addAppointment,
    deleteAppointment,
    listAppointments
};
