// 1. Imports
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const courseRoutes = require('./routes/course.routes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

// 2. Constantes
const app = express();

// 3. Middlewares
app.use(cors());
app.use(express.json());

// 4. Ruta de prueba
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Nahomi Learning API funcionando correctamente',
  });
});

// 5. Conexión a MongoDB para rutas de cursos
app.use('/api/courses', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// 6. Rutas de la API
app.use('/api/courses', courseRoutes);

// 7. Middleware 404
app.use(notFound);

// 8. Middleware general de errores
app.use(errorHandler);

// 9. Export
module.exports = app;