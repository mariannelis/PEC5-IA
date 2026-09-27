require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const startServer = async () => {
  await connectDB();
};

startServer();

module.exports = app;