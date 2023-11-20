// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Assuming Order model exists
const auth = require('../middleware/auth');

router.post('/purchase', auth, async (req, res) => {
  try {
    const { userId, mealId, quantity } = req.body;

    // Additional logic to check meal availability, user subscription, etc.

    let order = new Order({ userId, mealId, quantity });
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
