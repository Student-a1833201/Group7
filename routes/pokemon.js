const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Setup DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'adminpass123',
  database: 'pokemon_db'
});

// Insert Pokémon
router.post('/add', (req, res) => {
  const { name, type, abilities } = req.body;
  const query = 'INSERT INTO pokemon (name, type, abilities) VALUES (?, ?, ?)';
  db.query(query, [name, type, abilities], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Pokémon added successfully!', id: result.insertId });
  });
});

// Get all Pokémon
router.get('/all', (req, res) => {
  db.query('SELECT * FROM pokemon', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
