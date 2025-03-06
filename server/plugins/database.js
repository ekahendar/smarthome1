// server/plugins/database.js
import Database from 'better-sqlite3';

export default defineNitroPlugin(() => {
  const db = new Database('data.db'); // Nama file database

  // Buat tabel jika belum ada
  db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL
    )
  `);

  global.db = db; // Simpan koneksi database di global
});