const { addBookService } = require('../services/bookService');

async function addBookController(title, id) {
  const { insertId } = await addBookService(title, id);
  console.log(`New treatment added to treatment: "${title}".`);
}

module.exports = addBookController;
