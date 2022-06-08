const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const data = cats.find((cat) => cat.id === id);
    res.json(data);
  })
  .get('/', (req, res) => {
    const data = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(data);
  });
