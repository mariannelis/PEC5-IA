// 1. Middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  });
};

// 2. Export
module.exports = errorHandler;