const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // tu conexión a MongoDB

dotenv.config();
connectDB();

// Importar modelos (solo para que Node los cargue)
const Game = require('./models/Game');
const Review = require('./models/Review');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const gameRoutes = require('./routes/gameRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Usar rutas
app.use('/api/juegos', gameRoutes);
app.use('/api/reseñas', reviewRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
