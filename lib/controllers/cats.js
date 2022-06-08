const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const data = await Cat.getById(id);
    res.json(data);
  })
  .get('/', async (req, res) => {
    const data = await Cat.getAll();
    res.json(data);
  });
