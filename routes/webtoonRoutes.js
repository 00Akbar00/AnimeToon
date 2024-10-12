const express = require('express');
const { getAllWebtoons, createWebtoon, getWebtoonById, deleteWebtoon } = require('../controllers/webtoonController');
const router = express.Router();

// Public routes
router.get('/', getAllWebtoons);
router.get('/:id', getWebtoonById);

// Protected routes (requires JWT)
router.post('/', createWebtoon);
router.delete('/:id', deleteWebtoon);

module.exports = router;
