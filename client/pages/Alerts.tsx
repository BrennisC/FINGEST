import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, BellOff, TrendingUp, TrendingDown, DollarSign, AlertCircle } from "lucide-react";

export default function Alerts() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "Gasto inusual detectado",
      description: "Se detectó un cargo superior a tu promedio mensual en la categoría 'Entretenimiento'",
      date: "Hace 2 horas",
      amount: "$250.00",
      category: "spending",
      isRead: false,
    },
    {
      id: 2,
      type: "success",
      title: "¡Meta de ahorro alcanzada!",
      description: "Has alcanzado tu meta de ahorro para 'Vacaciones de verano'",
      date: "Hace 1 día",
      amount: "$1,000.00",
      category: "savings",
      isRead: true,
    },
    {
      id: 3,
      type: "info",
      title: "Recordatorio de pago",
      description: "El pago de tu tarjeta de crédito vence en 3 días",
      date: "Hace 2 días",
      amount: "$450.00",
      category: "payment",
      isRead: false,
    },
    {
      id: 4,
      type: "danger",
      title: "Saldo bajo en cuenta",
      description: "Tu cuenta principal está por debajo del límite mínimo establecido",
      date: "Hace 3 días",
      amount: "$100.00",
      category: "balance",
      isRead: true,
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "success":
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case "info":
        return <Bell className="w-5 h-5 text-blue-500" />;
      case "danger":
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getAlertBgColor = (type: string, isRead: boolean) => {
    const baseStyle = isRead ? "bg-gray-50" : "bg-white";
    return `${baseStyle} hover:bg-gray-50 transition-colors`;
  };

  const filteredAlerts = alerts.filter(alert => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "unread") return !alert.isRead;
    return alert.category === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Centro de Alertas</h1>
                <p className="text-gray-600 mt-1">
                  Gestiona tus notificaciones y alertas financieras
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch id="notifications" />
                  <label
                    htmlFor="notifications"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    Activar notificaciones
                  </label>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedFilter === "all"
                    ? "bg-slate-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                Todas
              </button>
              <button
                onClick={() => setSelectedFilter("unread")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedFilter === "unread"
                    ? "bg-slate-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                No leídas
              </button>
              <button
                onClick={() => setSelectedFilter("spending")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedFilter === "spending"
                    ? "bg-slate-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                Gastos
              </button>
              <button
                onClick={() => setSelectedFilter("savings")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedFilter === "savings"
                    ? "bg-slate-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                Ahorros
              </button>
              <button
                onClick={() => setSelectedFilter("payment")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedFilter === "payment"
                    ? "bg-slate-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                Pagos
              </button>
            </div>

            {/* Alerts List */}
            <div className="space-y-4">
              {filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`${getAlertBgColor(alert.type, alert.isRead)}
                    border border-gray-200 rounded-lg p-4 flex items-start gap-4`}
                >
                  <div className="flex-shrink-0">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {alert.title}
                          {!alert.isRead && (
                            <Badge className="ml-2 bg-blue-100 text-blue-800">
                              Nueva
                            </Badge>
                          )}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {alert.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-sm font-medium text-gray-900">
                          {alert.amount}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-xs text-gray-500">{alert.date}</span>
                      <button className="text-xs text-slate-600 hover:text-slate-900">
                        Marcar como leída
                      </button>
                      <button className="text-xs text-slate-600 hover:text-slate-900">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredAlerts.length === 0 && (
              <div className="text-center py-12">
                <BellOff className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No hay alertas
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  No se encontraron alertas para los filtros seleccionados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
