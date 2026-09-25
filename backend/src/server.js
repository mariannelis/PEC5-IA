// 1. Imports
require('dotenv').config();
const app = require('./app');

// 2. Constantes
const PORT = process.env.PORT || 3000;

// 3. Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});