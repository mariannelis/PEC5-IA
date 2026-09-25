// 1. Imports
const mongoose = require('mongoose');
const Course = require('../models/course.model');

// 2. Funciones auxiliares
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// 3. Controladores

// Obtener todos los cursos
const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

// Obtener un curso por ID
const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'El ID del curso no es válido',
      });
    }

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Curso no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// Crear un curso
const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Curso creado correctamente',
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// Actualizar un curso
const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'El ID del curso no es válido',
      });
    }

    const course = await Course.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Curso no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Curso actualizado correctamente',
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// Eliminar un curso
const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'El ID del curso no es válido',
      });
    }

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Curso no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Curso eliminado correctamente',
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// 4. Exports
module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};