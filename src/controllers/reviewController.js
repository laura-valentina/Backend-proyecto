const Review = require('../models/Review');

// Obtener todas las reseñas
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener reseñas por juego
const getReviewsByGame = async (req, res) => {
  try {
    const reviews = await Review.find({ juegoId: req.params.juegoId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear reseña
const createReview = async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar reseña
const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar reseña
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reseña eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllReviews,
  getReviewsByGame,
  createReview,
  updateReview,
  deleteReview
};
