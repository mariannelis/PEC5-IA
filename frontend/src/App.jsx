// 1. Imports
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import CourseForm from './components/CourseForm';

import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from './services/course.service';

// 2. Componente
const App = () => {
  // 3. Estados
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewedCourse, setViewedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  // 4. Funciones
  const loadCourses = async () => {
    try {
      setIsLoading(true);
      setHasError(false);

      const response = await getCourses();

      setCourses(response.data);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCourse = async (courseData) => {
    try {
      setHasError(false);

      await createCourse(courseData);
      await loadCourses();
    } catch (error) {
      console.error('Error al crear el curso:', error);
      setHasError(true);
    }
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);

    document
      .getElementById('admin')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUpdateCourse = async (courseData) => {
    if (!selectedCourse) {
      return;
    }

    try {
      setHasError(false);

      await updateCourse(selectedCourse._id, courseData);

      setSelectedCourse(null);

      await loadCourses();
    } catch (error) {
      console.error('Error al actualizar el curso:', error);
      setHasError(true);
    }
  };

  const handleDeleteCourse = async (id) => {
    const isConfirmed = window.confirm(
      '¿Seguro que quieres eliminar este curso?'
    );

    if (!isConfirmed) {
      return;
    }

    try {
      setHasError(false);

      await deleteCourse(id);

      if (selectedCourse?._id === id) {
        setSelectedCourse(null);
      }

      await loadCourses();
    } catch (error) {
      console.error('Error al eliminar el curso:', error);
      setHasError(true);
    }
  };

  const handleCancelEdit = () => {
    setSelectedCourse(null);
  };

  const handleViewCourse = (course) => {
    setViewedCourse(course);

    setTimeout(() => {
      document
        .getElementById('course-detail')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const handleCloseCourse = () => {
    setViewedCourse(null);
  };

  // 5. useEffect
  useEffect(() => {
    loadCourses();
  }, []);

  // 6. Return
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">
        {/* Inicio */}
        <section
          id="inicio"
          className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Aprende jugando
          </p>

          <h2 className="mb-6 text-5xl font-bold text-slate-900">
            Bienvenidos a Nahomi Learning
          </h2>

          <p className="max-w-2xl text-lg text-slate-600">
            Una plataforma educativa para que los niños descubran el mundo
            de la tecnología de forma sencilla, divertida y segura.
          </p>
        </section>

        {/* Cursos */}
        <section
          id="cursos"
          className="mx-auto max-w-6xl px-6 py-12"
        >
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Nuestros cursos
          </h2>

          {isLoading && (
            <p className="text-slate-600">
              Cargando cursos...
            </p>
          )}

          {hasError && (
            <p className="mb-6 rounded-xl bg-red-50 p-4 text-red-600">
              Ha ocurrido un error al procesar la solicitud.
            </p>
          )}

          {!isLoading && !hasError && courses.length === 0 && (
            <p className="text-slate-600">
              Todavía no hay cursos disponibles.
            </p>
          )}

          {!isLoading && !hasError && courses.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  onView={handleViewCourse}
                  onDelete={handleDeleteCourse}
                  onEdit={handleEditCourse}
                />
              ))}
            </div>
          )}
        </section>

        {viewedCourse && (
          <section
            id="course-detail"
            className="mx-auto max-w-4xl px-6 py-12"
          >
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                    {viewedCourse.category}
                  </span>

                  <h2 className="text-3xl font-bold text-slate-900">
                    {viewedCourse.title}
                  </h2>
                </div>

                <button
                  type="button"
                  title="Cerrar curso"
                  onClick={handleCloseCourse}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Cerrar
                </button>
              </div>

              {viewedCourse.image && (
                <div className="mb-8 overflow-hidden rounded-3xl bg-slate-300">
                  <img
                    src={viewedCourse.image}
                    alt={viewedCourse.title}
                    className="h-100 w-full object-cover"
                  />
                </div>
              )}
              <p className="mb-6 text-slate-600">
                {viewedCourse.description}
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">
                    Edad recomendada
                  </p>

                  <p className="font-semibold text-slate-900">
                    {viewedCourse.recommendedAge}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">
                    Nivel
                  </p>

                  <p className="font-semibold text-slate-900">
                    {viewedCourse.level}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">
                    Duración
                  </p>

                  <p className="font-semibold text-slate-900">
                    {viewedCourse.duration}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Contenido del curso
                </h3>

                <div className="whitespace-pre-line leading-8 text-slate-700">
                  {viewedCourse.content}
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Administración */}
        <section
          id="admin"
          className="mx-auto max-w-3xl px-6 py-12"
        >
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            {selectedCourse
              ? 'Editar curso'
              : 'Crear nuevo curso'}
          </h2>

          <CourseForm
            onSubmit={
              selectedCourse
                ? handleUpdateCourse
                : handleCreateCourse
            }
            selectedCourse={selectedCourse}
            onCancelEdit={handleCancelEdit}
          />
        </section>
      </main>
    </>
  );
};

// 7. Export
export default App;