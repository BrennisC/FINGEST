import Sidebar from "@/components/Sidebar";
import TourButton from "@/components/TourButton";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { subAccountsTourSteps } from "@/lib/tours";
import React, { useEffect, useState } from "react";

export default function Subcuentas() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "subcuentas";
  const [tourInitiated, setTourInitiated] = useState(false);
  const tourAttemptedRef = React.useRef(false);

  const handleTourClose = React.useCallback(() => {
    markTourAsSeen(pageName);
  }, [markTourAsSeen, pageName]);

  const { startTour, isOpen } = useTour({
    steps: subAccountsTourSteps,
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
        <main className="flex-1 bg-gray-50">
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6 subcuentas-header">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-1">
                    Subcuentas
                  </h1>
                  <p className="text-sm text-gray-600">
                    Organiza tu dinero en diferentes subcuentas
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <TourButton onClick={startTour} />
                  <button className="bg-slate-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm">
                    + Nueva Subcuenta
                  </button>
                </div>
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
              <div className="bg-white border border-gray-200 subcuentas-list">
                <table className="w-full">
                  <thead className="border-b border-gray-200 bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold text-foreground">
                        Nombre
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-foreground">
                        Descripción
                      </th>
                      <th className="text-right px-6 py-3 text-xs font-bold text-foreground">
                        Balance
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-foreground">
                        Creada
                      </th>
                      <th className="text-center px-6 py-3 text-xs font-bold text-foreground">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Prueba Subcuenta",
                        desc: "Subcuenta de prueba",
                        amount: 100,
                        date: "07/07/2025",
                      },
                      {
                        name: "Cine",
                        desc: "entd",
                        amount: 122,
                        date: "07/07/2025",
                      },
                      {
                        name: "NICK",
                        desc: "Para la comida",
                        amount: 100,
                        date: "07/07/2025",
                      },
                      {
                        name: "Tu otra cta",
                        desc: "sss",
                        amount: -68,
                        date: "07/07/2025",
                      },
                      {
                        name: "josue",
                        desc: "sin cta",
                        amount: -700,
                        date: "02/07/2025",
                      },
                    ].map((subcuenta, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {subcuenta.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {subcuenta.desc}
                        </td>
                        <td
                          className={`px-6 py-4 text-sm font-bold text-right ${subcuenta.amount < 0 ? "text-red-600" : "text-foreground"}`}
                        >
                          ${subcuenta.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {subcuenta.date}
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
          </div>
        </main>
      </div>
    </div>
  );
}
