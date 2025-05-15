const mysql = require('mysql2/promise');
require('dotenv').config();  // Load konfigurasi dari file .env

// Buat connection pool untuk koneksi ke database
const pool = mysql.createPool({
  host: process.env.DB_HOST,           // Host database
  user: process.env.DB_USER,           // Username
  password: process.env.DB_PASSWORD,   // Password
  database: process.env.DB_NAME,       // Nama database
  waitForConnections: true,            // Tunggu jika koneksi penuh
  connectionLimit: 100,                // Maksimum koneksi aktif
  queueLimit: 0                        // 0 berarti unlimited antrian
});

// Ekspor pool agar bisa digunakan oleh modul lain
module.exports = pool;
