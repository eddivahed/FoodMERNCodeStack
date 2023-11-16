const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User Registration
router.post('/register', async (req, res) => {
  // Implement registration logic
});

const jwt = require('jsonwebtoken');

// User Login
router.post('/login', async (req, res) => {
    // Implement login logic

    // Generate JWT Token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header('x-auth-token', token).send(token);
});

// Middleware to verify token
function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).send('Invalid token.');
    }
}

module.exports = router;
