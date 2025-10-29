import Sidebar from "@/components/Sidebar";
import TourButton from "@/components/TourButton";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { dashboardTourSteps } from "@/lib/tours";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "dashboard";
  const [tourInitiated, setTourInitiated] = useState(false);
  const tourAttemptedRef = React.useRef(false);

  const handleTourClose = React.useCallback(() => {
    markTourAsSeen(pageName);
  }, [markTourAsSeen, pageName]);

  const { startTour, closeTour, isOpen } = useTour({
    steps: dashboardTourSteps,
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
          <div className="max-w-7xl dashboard-layout">
            <div className="flex justify-between items-start mb-8">
              <div className="dashboard-heading">
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  Dashboard
                </h1>
                <p className="text-gray-600">
                  Descripción general de tu situación financiera
                </p>
              </div>
              <TourButton onClick={startTour} />
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-6 border-b border-gray-200 dashboard-tabs">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 border-b-2 border-slate-600">
                Overview
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-foreground">
                Analytics
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-foreground">
                Savings Goals
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6 dashboard-stats">
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-xs text-gray-600 mb-2">Total Balance</p>
                <p className="text-xl font-bold text-foreground">$1490.00</p>
                <p className="text-xs text-gray-600 mt-2">
                  +$25 from last month
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-xs text-gray-600 mb-2">Total Income</p>
                <p className="text-xl font-bold text-slate-600">$2700.00</p>
                <p className="text-xs text-gray-600 mt-2">From 1 sources</p>
              </div>
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-xs text-gray-600 mb-2">Total Expenses</p>
                <p className="text-xl font-bold text-red-600">$1210.00</p>
                <p className="text-xs text-gray-600 mt-2">44.8% of income</p>
              </div>
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-xs text-gray-600 mb-2">Savings Progress</p>
                <p className="text-xl font-bold" style={{ color: "#1d2636" }}>
                  45.8%
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Toward your savings goals
                </p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 dashboard-transactions">
                <h2 className="text-sm font-bold text-foreground mb-4">
                  Recent Transactions
                </h2>
                <p className="text-xs text-gray-600 mb-4">
                  Your latest financial activities
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="w-9 h-9 bg-slate-600 flex items-center justify-center text-white text-xs font-bold rounded-sm flex-shrink-0">
                      🌐
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        Internet Bill
                      </p>
                      <p className="text-xs text-gray-600">
                        Jul 21, 2023 - Utilities
                      </p>
                    </div>
                    <p className="text-sm font-bold text-red-600 flex-shrink-0">
                      -$150.00
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="w-9 h-9 bg-gray-300 flex items-center justify-center text-sm font-bold rounded-sm flex-shrink-0">
                      🎬
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        Movie Night
                      </p>
                      <p className="text-xs text-gray-600">
                        Jul 19, 2023 - Entertainment
                      </p>
                    </div>
                    <p className="text-sm font-bold text-red-600 flex-shrink-0">
                      -$33.00
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-400 flex items-center justify-center text-sm font-bold rounded-sm flex-shrink-0">
                      🍽️
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        Restaurant Dinner
                      </p>
                      <p className="text-xs text-gray-600">
                        Jul 17, 2023 - Food & Dining
                      </p>
                    </div>
                    <p className="text-sm font-bold text-red-600 flex-shrink-0">
                      -$68.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 dashboard-alerts">
                <h2 className="text-sm font-bold text-foreground mb-4">
                  Alerts & Reminders
                </h2>
                <p className="text-xs text-gray-600 mb-4">
                  Important notifications about your finances
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 p-3 bg-yellow-50 border border-yellow-200">
                    <span className="text-lg flex-shrink-0">⚠️</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">
                        Your balance is below $500
                      </p>
                      <p className="text-xs text-gray-600">Jul 22, 2023</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 flex-shrink-0 font-bold">
                      ×
                    </button>
                  </div>
                  <div className="flex gap-3 p-3 bg-green-50 border border-green-200">
                    <span className="text-lg flex-shrink-0">✅</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">
                        You've reached 60% of your Emergency Fund goal
                      </p>
                      <p className="text-xs text-gray-600">Jul 21, 2023</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 flex-shrink-0 font-bold">
                      ×
                    </button>
                  </div>
                  <div className="flex gap-3 p-3 bg-blue-50 border border-blue-200">
                    <span className="text-lg flex-shrink-0">💡</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground">
                        Electricity bill due in 3 days
                      </p>
                      <p className="text-xs text-gray-600">Jul 20, 2023</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 flex-shrink-0 font-bold">
                      ×
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
