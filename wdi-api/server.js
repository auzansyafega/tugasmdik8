// Import modul Express
const express = require('express');

// Inisialisasi aplikasi Express
const app = express();

// Load variabel lingkungan dari file .env
require('dotenv').config();

// Import route handler untuk endpoint /indicators
const indicatorRoutes = require('./routes/indicators');

// Middleware untuk parsing body request dalam format JSON
app.use(express.json());

// Gunakan routing untuk endpoint /indicators
// Semua permintaan ke /indicators akan diproses oleh routes/indicators.js
app.use('/indicators', indicatorRoutes);

// Ambil nilai port dari .env atau gunakan 3000 secara default
const PORT = process.env.PORT || 3000;

// Jalankan server dan dengarkan koneksi di port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
