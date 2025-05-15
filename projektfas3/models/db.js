const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./quotes.db');

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT NOT NULL,
      text TEXT NOT NULL
    )
  `);
});

module.exports = db;
