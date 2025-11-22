const express = require('express');
const router = express.Router();
const {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
  filterGames,
  getStatistics
} = require('../controllers/gameController');

// CRUD básico
router.get('/', getAllGames);
router.get('/:id', getGameById);
router.post('/', createGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

// Endpoints extra
router.get('/filter', filterGames); // Filtros por género, plataforma, completado
router.get('/estadisticas', getStatistics); // Dashboard estadístico

module.exports = router;

