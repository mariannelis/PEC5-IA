// 1. Imports
const express = require('express');

const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

// 2. Constantes
const router = express.Router();

// 3. Rutas
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

// 4. Export
module.exports = router;