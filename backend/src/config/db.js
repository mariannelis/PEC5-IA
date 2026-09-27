const dns = require('dns');
const mongoose = require('mongoose');

// 2. Configuración DNS solo para entorno local
if (!process.env.VERCEL) {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
}

// 3. Funciones
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI no está definida');
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    throw error;
  }
};

// 4. Export
module.exports = connectDB;