// routes/pokemon.js
const express = require('express');
const router = express.Router();
const database = require('../database');

// GET /pokemon - list all pokemon
router.get('/', async (req, res) => {
  try {
    const [rows] = await database.query('SELECT * FROM pokemon');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /pokemon/:id - get one pokemon by id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await database.query('SELECT * FROM pokemon WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Pokemon not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
