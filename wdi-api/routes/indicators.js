const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const {
      country,
      indicator,
      sort_by = 'Country_Name',
      order = 'asc',
      page = 1,
      limit = 20
    } = req.query;

    // Validasi parameter numerik
    if (isNaN(page) || isNaN(limit)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid query parameter. "page" and "limit" must be numbers.'
      });
    }

    if (!['asc', 'desc'].includes(order.toLowerCase())) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid "order" parameter. Must be "asc" or "desc".'
      });
    }

    const offset = (page - 1) * limit;

    // Bangun base query
    let baseQuery = `SELECT Country_Name, Country_Code, Series_Name, Series_Code, \`2021_YR2021_\` AS value FROM access_data WHERE 1=1`;
    const params = [];

    if (country) {
      baseQuery += ` AND Country_Name LIKE ?`;
      params.push(`%${country}%`);
    }

    if (indicator) {
      baseQuery += ` AND Series_Name LIKE ?`;
      params.push(`%${indicator}%`);
    }

    // Hitung total data untuk pagination
    const countQuery = `SELECT COUNT(*) as count FROM (${baseQuery}) as subquery`;
    const [countResult] = await db.query(countQuery, params);
    const totalItems = countResult[0].count;
    const totalPages = Math.ceil(totalItems / limit);

    // Tambahkan sorting dan limit
    const finalQuery = `${baseQuery} ORDER BY ${sort_by} ${order} LIMIT ? OFFSET ?`;
    const finalParams = [...params, parseInt(limit), parseInt(offset)];

    const [rows] = await db.query(finalQuery, finalParams);

    res.json({
      status: 'success',
      message: 'Data fetched successfully',
      page: parseInt(page),
      total_pages: totalPages,
      data: rows
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

module.exports = router;
