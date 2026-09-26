// 1. Imports
import { useEffect, useState } from 'react';

// 2. Constantes
const initialFormData = {
  title: '',
  description: '',
  category: 'Tecnología básica',
  recommendedAge: '',
  level: 'Principiante',
  duration: '',
  content: '',
  image: '',
};

// 3. Componente
const CourseForm = ({
  onSubmit,
  selectedCourse,
  onCancelEdit,
}) => {
  // 4. Estados
  const [formData, setFormData] = useState(initialFormData);

  // 5. useEffect
  useEffect(() => {
    if (selectedCourse) {
      setFormData({
        title: selectedCourse.title || '',
        description: selectedCourse.description || '',
        category: selectedCourse.category || 'Tecnología básica',
        recommendedAge: selectedCourse.recommendedAge || '',
        level: selectedCourse.level || 'Principiante',
        duration: selectedCourse.duration || '',
        content: selectedCourse.content || '',
        image: selectedCourse.image || '',
      });
    } else {
      setFormData(initialFormData);
    }
  }, [selectedCourse]);

  // 6. Handlers
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await onSubmit(formData);

    setFormData(initialFormData);
  };

  // 7. Return
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"
    >
      <div>
        <label
          htmlFor="title"
          className="mb-2 block font-semibold text-slate-700"
        >
          Título
        </label>

        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block font-semibold text-slate-700"
        >
          Descripción
        </label>

        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="mb-2 block font-semibold text-slate-700"
        >
          Categoría
        </label>

        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        >
          <option>Tecnología básica</option>
          <option>Internet</option>
          <option>Programación</option>
          <option>Inteligencia Artificial</option>
          <option>Seguridad digital</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="recommendedAge"
          className="mb-2 block font-semibold text-slate-700"
        >
          Edad recomendada
        </label>

        <input
          id="recommendedAge"
          name="recommendedAge"
          type="text"
          value={formData.recommendedAge}
          onChange={handleChange}
          placeholder="Ejemplo: 8-12 años"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label
          htmlFor="level"
          className="mb-2 block font-semibold text-slate-700"
        >
          Nivel
        </label>

        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        >
          <option>Principiante</option>
          <option>Intermedio</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="duration"
          className="mb-2 block font-semibold text-slate-700"
        >
          Duración
        </label>

        <input
          id="duration"
          name="duration"
          type="text"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Ejemplo: 30 minutos"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="mb-2 block font-semibold text-slate-700"
        >
          Contenido
        </label>

        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          className="min-h-32 w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label
          htmlFor="image"
          className="mb-2 block font-semibold text-slate-700"
        >
          URL de imagen
        </label>

        <input
          id="image"
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          title={selectedCourse ? 'Actualizar curso' : 'Crear curso'}
          className="flex-1 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700 active:scale-95"
        >
          {selectedCourse ? 'Actualizar curso' : 'Crear curso'}
        </button>

        {selectedCourse && (
          <button
            type="button"
            title="Cancelar edición"
            onClick={onCancelEdit}
            className="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

// 8. Export
export default CourseForm;