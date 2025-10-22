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

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getLinkClassName = (path: string) => {
    const baseClass =
      "block px-3 py-2 rounded-sm text-sm font-medium flex items-center gap-2 transition";
    const activeClass =
      "text-white bg-slate-600";
    const inactiveClass =
      "text-foreground hover:bg-gray-100";
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 font-bold text-xl text-foreground mb-8"
      >
        <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center text-white text-sm">
          💚
        </div>
        <span>FinGest</span>
      </Link>

      {/* Navigation */}
      <nav className="space-y-1 flex-1">
        {/* Visión General Section */}
        <div>
          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 px-3">
            Visión General
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/dashboard" className={getLinkClassName("/dashboard")}>
                <BarChart3 size={18} />
                Panel Principal
              </Link>
            </li>
            <li>
              <Link to="/transactions" className={getLinkClassName("/transactions")}>
                <ArrowRightLeft size={18} />
                Transacciones
              </Link>
            </li>
            <li>
              <Link to="/subcuentas" className={getLinkClassName("/subcuentas")}>
                <Wallet size={18} />
                Subcuentas
              </Link>
            </li>
            <li>
              <Link to="/alerts" className={getLinkClassName("/alerts")}>
                <Bell size={18} />
                Alertas
              </Link>
            </li>
          </ul>
        </div>

        {/* Aprendizaje Section */}
        <div className="mt-8">
          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 px-3">
            Aprendizaje
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/courses" className={getLinkClassName("/courses")}>
                <BookOpen size={18} />
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/financial-advice" className={getLinkClassName("/financial-advice")}>
                <Lightbulb size={18} />
                Consejos Financieros
              </Link>
            </li>
          </ul>
        </div>

        {/* Cuenta Section */}
        <div className="mt-8">
          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 px-3">
            Cuenta
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/profile" className={getLinkClassName("/profile")}>
                <User size={18} />
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Logout Button */}
      <button
        onClick={() => {
          // TODO: Implement logout functionality
          alert("Logout functionality to be implemented");
        }}
        className="w-full px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100 flex items-center gap-2 transition mt-auto pt-8 border-t border-gray-200"
      >
        <LogOut size={18} />
        Salir
      </button>
    </aside>
  );
}
