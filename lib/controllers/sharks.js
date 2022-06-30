const { Router } = require('express');
const Shark = require('../models/Shark');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const sharks = await Shark.getAll();
      res.json(sharks);
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Shark.insert(req.body);
      res.jsonp(data);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const data = await Shark.getById(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Shark.updateById(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const removed = await Shark.remove(req.params.id);
      res.json(removed);
    } catch (error) {
      next(error);
    }
  });
