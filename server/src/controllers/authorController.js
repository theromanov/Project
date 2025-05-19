// приклад: server/src/controllers/authorController.js
const db = require('../db');

exports.getAll = async (req, res) => {
  const rows = await db('authors').select('*');
  res.json(rows);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const item = await db('authors').where({ id }).first();
  if (!item) return res.status(404).json({ message: 'Author not found' });
  res.json(item);
};

exports.create = async (req, res) => {
  const [newAuthor] = await db('authors')
    .insert(req.body)
    .returning(['id', 'name', 'email']);
  res.status(201).json(newAuthor);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const [updated] = await db('authors')
    .where({ id })
    .update(req.body)
    .returning(['id', 'name', 'email']);
  if (!updated) return res.status(404).json({ message: 'Author not found' });
  res.json(updated);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const deleted = await db('authors').where({ id }).del();
  if (!deleted) return res.status(404).json({ message: 'Author not found' });
  res.status(204).end();
};
