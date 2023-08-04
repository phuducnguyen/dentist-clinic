const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'mew',
  password: 'password',
  database: 'dental_clinic'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Retrive Patients With Pagnation
app.get('/api/patients', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 50;

  const offset = (page - 1) * perPage;

  const query = `SELECT * FROM patients LIMIT ${offset}, ${perPage}`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
