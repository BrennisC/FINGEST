import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  ArrowRightLeft,
  Wallet,
  Bell,
  BookOpen,
  Lightbulb,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getLinkClassName = (path: string) => {
    const baseClass =
      "block px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-all duration-200 group";
    const activeClass = "bg-teal-600 text-white shadow-md";
    const inactiveClass =
      "text-slate-300 hover:bg-slate-600 hover:text-white hover:translate-x-1";
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <aside className="w-64 bg-slate-800 min-h-screen p-5 flex flex-col shadow-xl">
      {/* Logo con mejor diseño */}
      <Link
        to="/"
        className="flex items-center gap-3 mb-8 px-2 py-3 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          <span className="text-2xl">💚</span>
        </div>
        <span className="font-bold text-2xl text-white tracking-tight">
          FinGest
        </span>
      </Link>

      {/* Navigation con mejor espaciado */}
      <nav className="space-y-6 flex-1 overflow-y-auto">
        {/* Visión General Section */}
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">
            Visión General
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/dashboard" className={getLinkClassName("/dashboard")}>
                <BarChart3 size={20} className="flex-shrink-0" />
                <span>Panel Principal</span>
              </Link>
            </li>
            <li>
              <Link
                to="/transactions"
                className={getLinkClassName("/transactions")}
              >
                <ArrowRightLeft size={20} className="flex-shrink-0" />
                <span>Transacciones</span>
              </Link>
            </li>
            <li>
              <Link
                to="/subcuentas"
                className={getLinkClassName("/subcuentas")}
              >
                <Wallet size={20} className="flex-shrink-0" />
                <span>Subcuentas</span>
              </Link>
            </li>
            <li>
              <Link to="/alerts" className={getLinkClassName("/alerts")}>
                <Bell size={20} className="flex-shrink-0" />
                <span>Alertas</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Aprendizaje Section */}
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">
            Aprendizaje
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/courses" className={getLinkClassName("/courses")}>
                <BookOpen size={20} className="flex-shrink-0" />
                <span>Cursos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/financial-advice"
                className={getLinkClassName("/financial-advice")}
              >
                <Lightbulb size={20} className="flex-shrink-0" />
                <span>Consejos Financieros</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Cuenta Section */}
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">
            Cuenta
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/profile" className={getLinkClassName("/profile")}>
                <User size={20} className="flex-shrink-0" />
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Logout Button mejorado */}
      <div className="pt-5 mt-5 border-t border-slate-700">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="w-full px-4 py-3 rounded-lg text-sm font-medium text-slate-300 flex items-center gap-3 transition-all duration-200 hover:bg-red-600 hover:text-white group"
        >
          <LogOut
            size={20}
            className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
          />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
