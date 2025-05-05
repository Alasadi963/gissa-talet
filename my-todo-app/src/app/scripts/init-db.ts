import { openDb } from '../lib/db';

async function setup() {
    const db = await openDb();
    await db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT NOT NULL,
      title TEXT NOT NULL
    );
  `);
    console.log('Databasen är klar!');
}

setup();
