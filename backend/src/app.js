// 1. Imports
const express = require('express');
const cors = require('cors');

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

// 5. Rutas de la API
app.use('/api/courses', courseRoutes);

// 6. Middleware 404
app.use(notFound);

// 7. Middleware general de errores
app.use(errorHandler);

// 8. Export
module.exports = app;