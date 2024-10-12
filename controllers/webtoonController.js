const Webtoon = require('../models/webtoon');

// Fetch all webtoons
const getAllWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find({});
    res.status(200).json(webtoons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching webtoons' });
  }
};

// Add a new webtoon
const createWebtoon = async (req, res) => {
  const { title, summary, characters } = req.body;
  try {
    const newWebtoon = new Webtoon({ title, summary, characters });
    await newWebtoon.save();
    res.status(201).json(newWebtoon);
  } catch (error) {
    res.status(400).json({ message: 'Error adding webtoon' });
  }
};

// Fetch a specific webtoon by ID
const getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) return res.status(404).json({ message: 'Webtoon not found' });
    res.status(200).json(webtoon);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching webtoon' });
  }
};

// Delete a webtoon by ID
const deleteWebtoon = async (req, res) => {
  try {
    const webtoon = await Webtoon.findByIdAndDelete(req.params.id);
    if (!webtoon) return res.status(404).json({ message: 'Webtoon not found' });
    res.status(200).json({ message: 'Webtoon deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting webtoon' });
  }
};

module.exports = {
  getAllWebtoons,
  createWebtoon,
  getWebtoonById,
  deleteWebtoon,
};
