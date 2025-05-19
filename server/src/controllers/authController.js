// server/src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');       // knex-інстанс

const SALT_ROUNDS = 10;

// POST /api/auth/register
exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'Username and password required' });

  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  await db('users').insert({ username, password: hash });
  res.status(201).json({ username });
};

// POST /api/auth/login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await db('users').where({ username }).first();
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
  res.json({ token });
};
