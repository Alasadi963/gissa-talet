import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'games.db');
const db = new Database(dbPath);

export default db;
