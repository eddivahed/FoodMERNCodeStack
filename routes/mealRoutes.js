// routes/mealRoutes.js
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming Meal model exists

router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find({ available: true });
    res.json(meals);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
