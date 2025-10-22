import { Link, useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.slice(1).replace("-", " ").toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-border min-h-screen p-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground mb-8">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
              <span className="text-lg">💚</span>
            </div>
            <span>FinGest</span>
          </Link>

          <nav className="space-y-1">
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">
                Visión General
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    📊 Panel Principal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transactions"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    🔄 Transacciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subcuentas"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    💰 Subcuentas
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">
                Aprendizaje
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/courses"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    📚 Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-advice"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    💡 Consejos Financieros
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">
                Cuenta
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    👤 Perfil
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg border border-border p-12 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h1>
              <p className="text-muted-foreground mb-4">
                This page is on the roadmap! {pageName} will be available soon.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Feel free to reach out to our team if you have any feature requests.
              </p>
              <Link to="/dashboard" className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
