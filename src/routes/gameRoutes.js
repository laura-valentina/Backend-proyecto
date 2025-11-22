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

// 1. ENDPOINTS ESPECÍFICOS (DEBEN IR PRIMERO)
// /api/juegos/estadisticas
router.get('/estadisticas', getStatistics); 
// /api/juegos/filter?genero=Aventura&...
router.get('/filter', filterGames); 

// 2. CRUD BÁSICO Y RUTAS DINÁMICAS
// /api/juegos
router.get('/', getAllGames);
router.post('/', createGame);

// /api/juegos/:id (Debe ir al final para que no capture las rutas anteriores)
router.get('/:id', getGameById);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

module.exports = router;