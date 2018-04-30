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
router.get('/words', wordController.getWordList);
router.post('/words/add', wordController.addWord);

module.exports = router;
