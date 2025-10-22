import { Link } from "react-router-dom";

export default function Profile() {
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
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    🔄 Transacciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subcuentas"
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-gray-100"
                  >
                    💰 Subcuentas
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
                    className="block px-3 py-2 rounded-sm text-sm font-medium text-white bg-slate-600"
                  >
                    👤 Perfil
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-8 mb-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 bg-white border-4 border-slate-600 flex items-center justify-center text-6xl rounded-sm">
                  👨
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground mb-2">Mi Perfil</h1>
                  <p className="text-gray-600">Gestiona tu información personal y preferencias de cuenta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-12">
            <div className="max-w-6xl mx-auto">
              {/* Tabs */}
              <div className="flex gap-8 mb-8 border-b border-gray-200">
                <button className="px-4 py-3 font-medium text-slate-600 border-b-2 border-slate-600 hover:text-foreground">
                  General
                </button>
                <button className="px-4 py-3 font-medium text-gray-600 hover:text-foreground">
                  Seguridad
                </button>
                <button className="px-4 py-3 font-medium text-gray-600 hover:text-foreground">
                  Notificaciones
                </button>
              </div>

              {/* Profile Information */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h2 className="text-sm font-bold text-foreground mb-6">Información de Usuario</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nombres completos</label>
                      <input
                        type="text"
                        value="nick evaristo"
                        className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white focus:outline-none focus:border-slate-600 rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nivel de educación financiera</label>
                      <select className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white focus:outline-none focus:border-slate-600 rounded-sm">
                        <option>Intermedio</option>
                        <option>Principiante</option>
                        <option>Avanzado</option>
                      </select>
                    </div>

                    <div>
                      <button className="w-full bg-slate-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm">
                        Cambiar foto
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h2 className="text-sm font-bold text-foreground mb-6">Información General</h2>
                  <p className="text-xs text-gray-600 mb-5">Actualiza tu información personal y datos de contacto</p>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Nombres</label>
                        <input
                          type="text"
                          value="nick"
                          className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white rounded-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Apellidos</label>
                        <input
                          type="text"
                          value="evaristo"
                          className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white rounded-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Correo electrónico</label>
                      <input
                        type="email"
                        value="evaristo108@gmail.com"
                        className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white focus:outline-none focus:border-slate-600 rounded-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                        <input
                          type="tel"
                          value="967409142"
                          className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white rounded-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">País</label>
                        <input
                          type="text"
                          value="España"
                          className="w-full px-4 py-2 border border-gray-200 text-foreground bg-white rounded-sm"
                        />
                      </div>
                    </div>

                    <button className="w-full bg-slate-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm">
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
