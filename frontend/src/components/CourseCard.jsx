// 1. Componente
const CourseCard = ({
  course,
  onDelete,
  onEdit,
  onView,
}) => {
  // 2. Handlers
  const handleView = () => {
    onView(course);
  };

  const handleEdit = () => {
    onEdit(course);
  };

  const handleDelete = () => {
    onDelete(course._id);
  };

  // 3. Return
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-55 overflow-hidden bg-slate-300">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            💻
          </div>
        )}
      </div>

      <div className="p-5">
        <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {course.category}
        </span>

        <h3 className="mb-2 text-xl font-bold text-slate-900">
          {course.title}
        </h3>

        <p className="mb-4 text-sm text-slate-600">
          {course.description}
        </p>

        <div className="mb-4 space-y-1 text-sm text-slate-500">
          <p>Edad: {course.recommendedAge}</p>
          <p>Nivel: {course.level}</p>
          <p>Duración: {course.duration}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            title="Ver curso"
            onClick={handleView}
            className="flex-1 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700 active:scale-95"
          >
            Ver curso
          </button>

          <button
            type="button"
            title="Editar curso"
            onClick={handleEdit}
            className="rounded-xl border border-blue-300 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-50 active:scale-95"
          >
            Editar
          </button>

          <button
            type="button"
            title="Eliminar curso"
            onClick={handleDelete}
            className="rounded-xl border border-red-300 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-50 active:scale-95"
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

// 4. Export
export default CourseCard;