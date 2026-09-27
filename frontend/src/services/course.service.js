// 1. Constantes
const API_URL = import.meta.env.VITE_API_URL;

// 2. Funciones

// Obtener todos los cursos
const getCourses = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('No se pudieron obtener los cursos');
  }

  return response.json();
};

// Obtener un curso por ID
const getCourseById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error('No se pudo obtener el curso');
  }

  return response.json();
};

// Crear un curso
const createCourse = async (courseData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  });

  if (!response.ok) {
    throw new Error('No se pudo crear el curso');
  }

  return response.json();
};

// Actualizar un curso
const updateCourse = async (id, courseData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  });

  if (!response.ok) {
    throw new Error('No se pudo actualizar el curso');
  }

  return response.json();
};

// Eliminar un curso
const deleteCourse = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('No se pudo eliminar el curso');
  }

  return response.json();
};

// 3. Exports
export {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};