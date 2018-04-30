/**
 * Created by yawenina on 4/1/18.
 */
const express = require('express');
const router = express.Router();

const wordController = require('../controllers/wordController');
const userController = require('../controllers/userController');

// User
router.post('/register', userController.register);

// Word
router.get('/', wordController.getWordList);
router.post('/add', wordController.addWord);

module.exports = router;
