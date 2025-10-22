import { Link } from "react-router-dom";

export default function FinancialAdvice() {
  const advice = [
    {
      icon: "💡",
      title: "Regla 50/30/20",
      category: "Presupuesto",
      description: "Destina el 50% a necesidades, 30% a deseos y 20% a ahorros e inversiones.",
    },
    {
      icon: "🎯",
      title: "Fondo de Emergencia",
      category: "Ahorros",
      description: "Mantén entre 3-6 meses de gastos en una cuenta de emergencia.",
    },
    {
      icon: "📈",
      title: "Diversificación de Inversiones",
      category: "Inversión",
      description: "No inviertas todo en un solo activo. Distribuye tu cartera en diferentes instrumentos.",
    },
    {
      icon: "💳",
      title: "Gestión de Deuda",
      category: "Crédito",
      description: "Paga tus deudas de mayor interés primero para reducir costos financieros.",
    },
    {
      icon: "🏦",
      title: "Automatiza tus Ahorros",
      category: "Ahorros",
      description: "Configura transferencias automáticas para ahorrar sin pensarlo.",
    },
    {
      icon: "📊",
      title: "Invierte en tu Educación",
      category: "Crecimiento",
      description: "Aprende constantemente sobre finanzas para tomar mejores decisiones.",
    },
    {
      icon: "🎁",
      title: "Presupuesta tus Gastos",
      category: "Presupuesto",
      description: "Registra y categoriza todos tus gastos para mantener control.",
    },
    {
      icon: "🌍",
      title: "Planifica tu Retiro",
      category: "Futuro",
      description: "Comienza a ahorrar para el retiro desde temprano usando el interés compuesto.",
    },
    {
      icon: "💰",
      title: "Negocia tus Tasas",
      category: "Crédito",
      description: "Negocia con tu banco por mejores tasas de interés en créditos.",
    },
  ];

  const categories = ["Todos", "Presupuesto", "Ahorros", "Inversión", "Crédito", "Futuro"];

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
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 rounded-sm"
                  >
                    💰 Subcuentas
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
                    className="block px-3 py-2 text-sm font-medium text-white bg-slate-600 rounded-sm"
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
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">Consejos Financieros Personalizados</h1>
                <p className="text-gray-600">Estrategias y recomendaciones basadas en tu progreso actual</p>
              </div>

              {/* Category Filter */}
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-sm transition ${
                      cat === "Todos"
                        ? "bg-slate-600 text-white"
                        : "bg-white border border-gray-200 text-foreground hover:border-slate-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Advice Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {advice.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-6 hover:border-slate-600 hover:shadow-sm transition group">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                        </div>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 mb-3 rounded-sm">
                          {item.category}
                        </span>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        <button className="mt-4 text-sm font-medium text-slate-600 hover:text-blue-900 transition flex items-center gap-1">
                          Más información →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-white border border-gray-200 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-2">¿Necesitas asesoría personalizada?</h2>
                    <p className="text-gray-600">Habla con uno de nuestros asesores financieros</p>
                  </div>
                  <button className="bg-slate-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm whitespace-nowrap ml-4">
                    Agendar Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
