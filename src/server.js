// 1. Requerir módulos
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // función para conectar a MongoDB

// 2. Configurar variables de entorno
dotenv.config();

// 3. Inicializar app
const app = express();

// 4. Middleware
app.use(express.json());

// 5. Conectar a la base de datos
connectDB();

// 6. Importar modelos (opcional)
const Game = require('./models/Game');
const Review = require('./models/Review');

// 7. Importar rutas
const gameRoutes = require('./routes/gameRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// 8. Usar rutas
app.use('/api/juegos', gameRoutes);
app.use('/api/reseñas', reviewRoutes);

// 9. Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

// 10. Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log('MONGO_URI =', process.env.MONGO_URI);
});
