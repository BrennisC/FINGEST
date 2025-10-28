import Sidebar from "@/components/Sidebar";
import TourButton from "@/components/TourButton";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { transactionsTourSteps } from "@/lib/tours";
import React, { useEffect, useState } from "react";

export default function Transactions() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "transactions";
  const [tourInitiated, setTourInitiated] = useState(false);
  const tourAttemptedRef = React.useRef(false);

  const handleTourClose = React.useCallback(() => {
    markTourAsSeen(pageName);
  }, [markTourAsSeen, pageName]);

  const { startTour, closeTour, isOpen } = useTour({
    steps: transactionsTourSteps,
    onClose: handleTourClose,
  });

  // Start tour automatically on first visit - with ref to avoid dependency cycle
  useEffect(() => {
    if (!hasSeenTour[pageName] && !tourInitiated && !tourAttemptedRef.current) {
      tourAttemptedRef.current = true;
      setTourInitiated(true);

      const timer = setTimeout(() => {
        startTour();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl">
            <div className="flex items-center justify-between mb-6 transactions-header">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  Transacciones
                </h1>
                <p className="text-gray-600 text-sm">
                  Administre y rastree sus ingresos y gastos
                </p>
              </div>
              <div className="flex items-center gap-3">
                <TourButton onClick={startTour} />
                <button className="bg-slate-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm add-transaction-btn">
                  + Añadir Transacción
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3 mb-6 items-center transactions-filters">
              <button className="px-4 py-2 bg-slate-600 text-white text-sm font-medium rounded-sm">
                Todos
              </button>
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
            <div className="bg-white border border-gray-200 transactions-table">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "proyecto",
                      date: "2 Jul, 2025",
                      amount: "-$120.00",
                      icon: "📉",
                    },
                    {
                      name: "sueldo",
                      date: "2 Jul, 2025",
                      amount: "+$1000.00",
                      icon: "💰",
                    },
                    {
                      name: "polillo",
                      date: "2 Jul, 2025",
                      amount: "-$80.00",
                      icon: "📉",
                    },
                    {
                      name: "la al cine",
                      date: "1 Jul, 2025",
                      amount: "+$150.00",
                      icon: "🎬",
                    },
                    {
                      name: "Cine",
                      date: "1 Jul, 2025",
                      amount: "+$500.00",
                      icon: "🎭",
                    },
                    {
                      name: "corner polillo",
                      date: "2 Jul, 2025",
                      amount: "-$45.00",
                      icon: "📉",
                    },
                  ].map((transaction, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gray-200 flex items-center justify-center text-sm rounded-sm flex-shrink-0">
                            {transaction.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground">
                              {transaction.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p
                          className={`text-sm font-bold ${transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.amount}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-gray-600 hover:text-foreground font-bold">
                          ⋮
                        </button>
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
