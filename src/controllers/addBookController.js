const { addBookService } = require('../services/bookService');

async function addBookController(title, libraryId) {
  const { insertId } = await addBookService(title, libraryId);
  console.log(`New treatment added to treatment with ID ${libraryId}: "${title}".`);
}

module.exports = addBookController;
