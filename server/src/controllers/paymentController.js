const db = require('../config/db');

exports.getAll = async (req, res) => {
  res.json(await db('payments').select('*'));
};

exports.getById = async (req, res) => {
  const p = await db('payments').where({ id: req.params.id }).first();
  if (!p) return res.status(404).json({ message: 'Payment not found' });
  res.json(p);
};

exports.create = async (req, res) => {
  const [p] = await db('payments')
    .insert(req.body)
    .returning('*');
  res.status(201).json(p);
};

exports.update = async (req, res) => {
  const [u] = await db('payments')
    .where({ id: req.params.id })
    .update(req.body)
    .returning('*');
  if (!u) return res.status(404).json({ message: 'Payment not found' });
  res.json(u);
};

exports.remove = async (req, res) => {
  const d = await db('payments').where({ id: req.params.id }).del();
  if (!d) return res.status(404).json({ message: 'Payment not found' });
  res.status(204).end();
};
