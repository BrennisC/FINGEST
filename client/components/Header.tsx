import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground"
          >
            <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center text-white text-sm">
              💚
            </div>
            <span>FinGest</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Funcionalidades
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Precios
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Contacto
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-slate-600 text-sm font-medium transition">
              Iniciar sesión
            </button>
            <Link
              to="/dashboard"
              className="bg-slate-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm"
            >
              Comenzar gratis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
