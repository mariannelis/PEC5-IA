// 1. Imports
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

// 2. Constantes
const PORT = process.env.PORT || 3000;

// 3. Funciones
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
};

// 4. Inicio
startServer();