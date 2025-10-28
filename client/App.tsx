import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TourProvider } from "./context/TourContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Subcuentas from "./pages/Subcuentas";
import Profile from "./pages/Profile";
import Placeholder from "./pages/Placeholder";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FinancialAdvice from "./pages/FinancialAdvice";
import Alerts from "./pages/Alerts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TourProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/subcuentas" element={<Subcuentas />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/financial-advice" element={<FinancialAdvice />} />
              <Route path="/notifications" element={<Placeholder />} />
              <Route path="/settings" element={<Placeholder />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </TourProvider>
    </QueryClientProvider>
  );
}
