const db = require('../config/db');

exports.getAll = async (req, res) => {
  const list = await db('publications').select('*');
  res.json(list);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const pub = await db('publications').where({ id }).first();
  if (!pub) return res.status(404).json({ message: 'Publication not found' });
  res.json(pub);
};

exports.create = async (req, res) => {
  const [p] = await db('publications')
    .insert(req.body)
    .returning(['id', 'title', 'content', 'author_id', 'published_at']);
  res.status(201).json(p);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const [u] = await db('publications')
    .where({ id })
    .update(req.body)
    .returning(['id', 'title', 'content', 'author_id', 'published_at']);
  if (!u) return res.status(404).json({ message: 'Publication not found' });
  res.json(u);
};

exports.remove = async (req, res) => {
  const deleted = await db('publications').where({ id: req.params.id }).del();
  if (!deleted) return res.status(404).json({ message: 'Publication not found' });
  res.status(204).end();
};
