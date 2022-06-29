const { Router } = require('express');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const sharks = await Shark.getAll();
    res.json(sharks);
  } catch (error) {
    next(error);
  }
});
