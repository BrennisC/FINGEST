import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Lock, Bell, Shield, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: null },
    { id: "security", label: "Seguridad", icon: Shield },
    { id: "notifications", label: "Notificaciones", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          {/* Header Section */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-5xl rounded-lg shadow-sm">
                  👨
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-1">
                    Mi Perfil
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Administra tu cuenta y preferencias
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-8">
              <div className="flex gap-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-4 font-medium text-sm border-b-2 transition-colors ${
                        isActive
                          ? "border-slate-600 text-foreground"
                          : "border-transparent text-gray-600 hover:text-foreground"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto px-8 py-8">
            {/* General Tab */}
            {activeTab === "general" && (
              <div className="space-y-6">
                {/* User Profile Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">
                      Información de Perfil
                    </h2>
                    <button className="px-4 py-2 bg-slate-600 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition">
                      Cambiar foto
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        defaultValue="Nick Evaristo"
                        className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombres
                        </label>
                        <input
                          type="text"
                          defaultValue="Nick"
                          className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Apellidos
                        </label>
                        <input
                          type="text"
                          defaultValue="Evaristo"
                          className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-foreground mb-6">
                    Información de Contacto
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        defaultValue="evaristo108@gmail.com"
                        className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          defaultValue="967409142"
                          className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          País
                        </label>
                        <input
                          type="text"
                          defaultValue="España"
                          className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Knowledge Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-foreground mb-6">
                    Educación Financiera
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nivel de educación financiera
                      </label>
                      <select
                        defaultValue="Intermedio"
                        className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                      >
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                    <p className="text-sm text-gray-600">
                      Esto nos ayuda a personalizar contenido y recomendaciones para ti.
                    </p>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex gap-3 justify-end">
                  <button className="px-6 py-2.5 border border-gray-200 text-foreground font-medium rounded-lg hover:bg-gray-50 transition">
                    Cancelar
                  </button>
                  <button className="px-6 py-2.5 bg-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 transition">
                    Guardar cambios
                  </button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                {/* Password Section */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-slate-600" />
                    <h2 className="text-lg font-semibold text-foreground">
                      Contraseña
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Cambia tu contraseña regularmente para mantener tu cuenta segura.
                    </p>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Contraseña actual
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          defaultValue=""
                          placeholder="Ingresa tu contraseña actual"
                          className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nueva contraseña
                      </label>
                      <input
                        type="password"
                        defaultValue=""
                        placeholder="Ingresa una nueva contraseña"
                        className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        defaultValue=""
                        placeholder="Confirma tu nueva contraseña"
                        className="w-full px-4 py-2.5 border border-gray-200 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent rounded-lg"
                      />
                    </div>

                    <button className="w-full bg-slate-600 text-white py-2.5 font-medium rounded-lg hover:bg-slate-700 transition">
                      Actualizar contraseña
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-5 h-5 text-slate-600" />
                    <h2 className="text-lg font-semibold text-foreground">
                      Autenticación de dos factores
                    </h2>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">
                          Seguridad mejorada
                        </p>
                        <p className="text-sm text-blue-800 mt-1">
                          La autenticación de dos factores agrega una capa adicional de seguridad a tu cuenta.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">
                        Autenticación por aplicación
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Usa una app como Google Authenticator
                      </p>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 text-foreground font-medium rounded-lg hover:bg-white transition">
                      Configurar
                    </button>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-foreground mb-6">
                    Sesiones activas
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">
                          Esta sesión
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Chrome en Windows • Última actividad: Ahora
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Activo
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">
                          Sesión anterior
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Firefox en macOS • Última actividad: Hace 2 días
                        </p>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Bell className="w-5 h-5 text-slate-600" />
                    <h2 className="text-lg font-semibold text-foreground">
                      Preferencias de notificaciones
                    </h2>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">
                    Elige cómo deseas recibir notificaciones de tu cuenta
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Notificaciones por email",
                        description: "Recibe actualizaciones importantes en tu correo",
                      },
                      {
                        title: "Alertas de seguridad",
                        description: "Ten conocimiento de actividad inusual en tu cuenta",
                      },
                      {
                        title: "Ofertas y promociones",
                        description: "Entérate de nuestras últimas ofertas",
                      },
                      {
                        title: "Actualizaciones de producto",
                        description: "Conoce las nuevas características",
                      },
                    ].map((notif, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div>
                          <p className="font-medium text-foreground">
                            {notif.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {notif.description}
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked={idx < 2}
                          className="w-5 h-5 rounded border-gray-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-slate-600 text-white py-2.5 font-medium rounded-lg hover:bg-slate-700 transition">
                    Guardar preferencias
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
