// 1. Componente
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-800">
          Nahomi Learning
        </h1>

        <div className="flex gap-6">
          <a
            href="#inicio"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Inicio
          </a>

          <a
            href="#cursos"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Cursos
          </a>

          <a
            href="#admin"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Administrar
          </a>
        </div>
      </div>
    </nav>
  );
};

// 2. Export
export default Navbar;