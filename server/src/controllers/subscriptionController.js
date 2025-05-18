const db = require('../config/db');

exports.getAll = async (req, res) => {
  res.json(await db('subscriptions').select('*'));
};

exports.getById = async (req, res) => {
  const sub = await db('subscriptions').where({ id: req.params.id }).first();
  if (!sub) return res.status(404).json({ message: 'Subscription not found' });
  res.json(sub);
};

exports.create = async (req, res) => {
  const [s] = await db('subscriptions')
    .insert(req.body)
    .returning('*');
  res.status(201).json(s);
};

exports.update = async (req, res) => {
  const [u] = await db('subscriptions')
    .where({ id: req.params.id })
    .update(req.body)
    .returning('*');
  if (!u) return res.status(404).json({ message: 'Subscription not found' });
  res.json(u);
};

exports.remove = async (req, res) => {
  const d = await db('subscriptions').where({ id: req.params.id }).del();
  if (!d) return res.status(404).json({ message: 'Subscription not found' });
  res.status(204).end();
};
