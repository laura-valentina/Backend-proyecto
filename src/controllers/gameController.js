const Game = require('../models/Game');

// Obtener todos los juegos
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un juego por ID
const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Juego no encontrado' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un juego
const createGame = async (req, res) => {
  const newGame = new Game(req.body);
  try {
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un juego
const updateGame = async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un juego
const deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Juego eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Filtros avanzados
const filterGames = async (req, res) => {
  try {
    const { genero, plataforma, completado } = req.query;
    let query = {};

    if (genero) query.genero = genero;
    if (plataforma) query.plataforma = plataforma;
    if (completado) query.completado = completado === 'true';

    const games = await Game.find(query);
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Estadísticas
const getStatistics = async (req, res) => {
  try {
    const totalGames = await Game.countDocuments();
    const completedGames = await Game.countDocuments({ completado: true });

    res.json({
      totalGames,
      completedGames
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
  filterGames,
    getStatistics
};
