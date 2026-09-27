require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

// 2. Funciones
const startServer = async () => {
  await connectDB();
};

// 3. Inicio
startServer();

// 4. Export
module.exports = app;