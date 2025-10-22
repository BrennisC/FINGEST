import { Link } from "react-router-dom";

export default function Subcuentas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground mb-8">
            <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center text-white text-sm">
              💚
            </div>
            <span>FinGest</span>
          </Link>

          <nav className="space-y-1">
            <div>
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 px-3">
                Visión General
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    📊 Panel Principal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transactions"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    🔄 Transacciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subcuentas"
                    className="block px-3 py-2 text-sm font-medium text-white bg-slate-600 rounded-sm"
                  >
                    💰 Subcuentas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alerts"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    🔔 Alertas
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 px-3">
                Aprendizaje
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/courses"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    📚 Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-advice"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    💡 Consejos Financieros
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 px-3">
                Cuenta
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    👤 Perfil
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-1">Subcuentas</h1>
                  <p className="text-sm text-gray-600">Organiza tu dinero en diferentes subcuentas</p>
                </div>
                <button className="bg-slate-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm">
                  + Nueva Subcuenta
                </button>
              </div>

              {/* Summary Cards - Compact */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white border-l-4 border-slate-600 p-4">
                  <p className="text-xs text-gray-600 mb-1">Balance Total</p>
                  <p className="text-xl font-bold text-foreground">$354.00</p>
                  <p className="text-xs text-gray-500 mt-1">4 subcuentas</p>
                </div>
                <div className="bg-white border-l-4 border-gray-400 p-4">
                  <p className="text-xs text-gray-600 mb-1">Ahorros</p>
                  <p className="text-xl font-bold text-foreground">$0.00</p>
                  <p className="text-xs text-gray-500 mt-1">0 cuenta</p>
                </div>
                <div className="bg-white border-l-4 border-gray-400 p-4">
                  <p className="text-xs text-gray-600 mb-1">Inversiones</p>
                  <p className="text-xl font-bold text-foreground">$0.00</p>
                  <p className="text-xs text-gray-500 mt-1">0 cuente</p>
                </div>
                <div className="bg-white border-l-4 border-gray-400 p-4">
                  <p className="text-xs text-gray-600 mb-1">Objetivos</p>
                  <p className="text-xl font-bold text-foreground">$0.00</p>
                  <p className="text-xs text-gray-500 mt-1">1 metas activas</p>
                </div>
              </div>

              {/* Subcuentas Table */}
              <div className="bg-white border border-gray-200">
                <table className="w-full">
                  <thead className="border-b border-gray-200 bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold text-foreground">Nombre</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-foreground">Descripción</th>
                      <th className="text-right px-6 py-3 text-xs font-bold text-foreground">Balance</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-foreground">Creada</th>
                      <th className="text-center px-6 py-3 text-xs font-bold text-foreground">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Prueba Subcuenta", desc: "Subcuenta de prueba", amount: 100, date: "07/07/2025" },
                      { name: "Cine", desc: "entd", amount: 122, date: "07/07/2025" },
                      { name: "NICK", desc: "Para la comida", amount: 100, date: "07/07/2025" },
                      { name: "Tu otra cta", desc: "sss", amount: -68, date: "07/07/2025" },
                      { name: "josue", desc: "sin cta", amount: -700, date: "02/07/2025" },
                    ].map((subcuenta, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{subcuenta.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{subcuenta.desc}</td>
                        <td className={`px-6 py-4 text-sm font-bold text-right ${subcuenta.amount < 0 ? "text-red-600" : "text-foreground"}`}>
                          ${subcuenta.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{subcuenta.date}</td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-gray-600 hover:text-foreground font-bold">⋮</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
