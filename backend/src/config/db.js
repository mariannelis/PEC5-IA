const dns = require('dns');
const mongoose = require('mongoose');

if (!process.env.VERCEL) {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
}

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI no está definida');
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);

  console.log('Conexión exitosa a MongoDB');
};

module.exports = connectDB;