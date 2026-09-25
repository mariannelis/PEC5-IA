// 1. Imports
const mongoose = require('mongoose');

// 2. Constantes
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'El título es obligatorio'],
      trim: true,
      maxlength: [100, 'El título no puede superar los 100 caracteres'],
    },

    description: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
      trim: true,
      maxlength: [300, 'La descripción no puede superar los 300 caracteres'],
    },

    category: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
      trim: true,
      enum: [
        'Tecnología básica',
        'Internet',
        'Programación',
        'Inteligencia Artificial',
        'Seguridad digital',
      ],
    },

    recommendedAge: {
      type: String,
      required: [true, 'La edad recomendada es obligatoria'],
      trim: true,
    },

    level: {
      type: String,
      required: [true, 'El nivel es obligatorio'],
      enum: ['Principiante', 'Intermedio'],
      default: 'Principiante',
    },

    duration: {
      type: String,
      required: [true, 'La duración es obligatoria'],
      trim: true,
    },

    content: {
      type: String,
      required: [true, 'El contenido es obligatorio'],
      trim: true,
    },

    image: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// 3. Modelo
const Course = mongoose.model('Course', courseSchema);

// 4. Export
module.exports = Course;