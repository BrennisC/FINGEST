import { Link } from "react-router-dom";

export default function Transactions() {
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
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    📊 Panel Principal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transactions"
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-white bg-slate-600"
                  >
                    🔄 Transacciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subcuentas"
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    <p>💰 Subcuentas</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alerts"
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
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
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    📚 Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-advice"
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
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
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    👤 Perfil
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">Transacciones</h1>
                <p className="text-gray-600 text-sm">Administre y rastree sus ingresos y gastos</p>
              </div>
              <button className="bg-slate-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm">
                + Añadir Transacción
              </button>
            </div>

            {/* Filters */}
            <div className="flex gap-3 mb-6 items-center">
              <button className="px-4 py-2 bg-slate-600 text-white text-sm font-medium rounded-sm">Todos</button>
              <button className="px-4 py-2 bg-white text-foreground border border-gray-200 text-sm font-medium hover:border-slate-600 rounded-sm">
                Ingresos
              </button>
              <button className="px-4 py-2 bg-white text-foreground border border-gray-200 text-sm font-medium hover:border-slate-600 rounded-sm">
                Gastos
              </button>
              <div className="flex-1"></div>
              <input
                type="text"
                placeholder="Buscar transacciones..."
                className="px-4 py-2 bg-white border border-gray-200 text-sm rounded-sm focus:outline-none focus:border-slate-600"
              />
              <button className="px-4 py-2 bg-white text-foreground border border-gray-200 text-sm font-medium hover:border-slate-600 rounded-sm">
                Más recientes ↓
              </button>
              <button className="px-4 py-2 bg-slate-600 text-white text-sm font-medium hover:bg-blue-900 transition rounded-sm">
                Buscar
              </button>
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-gray-200">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: "proyecto", date: "2 Jul, 2025", amount: "-$120.00", icon: "📉" },
                    { name: "sueldo", date: "2 Jul, 2025", amount: "+$1000.00", icon: "💰" },
                    { name: "polillo", date: "2 Jul, 2025", amount: "-$80.00", icon: "📉" },
                    { name: "la al cine", date: "1 Jul, 2025", amount: "+$150.00", icon: "🎬" },
                    { name: "Cine", date: "1 Jul, 2025", amount: "+$500.00", icon: "🎭" },
                    { name: "corner polillo", date: "2 Jul, 2025", amount: "-$45.00", icon: "📉" },
                  ].map((transaction, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gray-200 flex items-center justify-center text-sm rounded-sm flex-shrink-0">
                            {transaction.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground">{transaction.name}</p>
                            <p className="text-xs text-gray-600">{transaction.date}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className={`text-sm font-bold ${transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                          {transaction.amount}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-gray-600 hover:text-foreground font-bold">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
