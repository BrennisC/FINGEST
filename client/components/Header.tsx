import { Link } from "react-router-dom";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { HeaderTourSteps } from "@/lib/tours";
import { useCallback, useEffect, useRef, useState } from "react";
import TourButton from "./TourButton";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps = {}) {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "header";
  const [tourInitiated, setTourInitiated] = useState(false);
  const tourAttemptedRef = useRef(false);

  const handleTourClose = useCallback(() => {
    markTourAsSeen(pageName);
  }, [markTourAsSeen, pageName]);

  const { startTour, closeTour, isOpen } = useTour({
    steps: HeaderTourSteps,
    onClose: handleTourClose,
  });

  useEffect(() => {
    if (!hasSeenTour[pageName] && !tourInitiated && !tourAttemptedRef.current) {
      tourAttemptedRef.current = true;
      setTourInitiated(true);

      const timer = setTimeout(() => {
        startTour();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hasSeenTour, pageName, startTour, tourInitiated]);

  return (
    <header
      className={cn("bg-white border-b border-gray-200 header", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground header-logo"
          >
            <div className="w-8 h-8 bg-slate-600 rounded-sm flex items-center justify-center text-white text-sm">
              💚
            </div>
            <span>FinGest</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 header-nav">
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Funcionalidades
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Precios
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Contacto
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4 header-user">
            <Link
              to="/login"
              className="text-foreground hover:text-slate-600 text-sm font-medium transition"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-slate-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-900 transition rounded-sm"
            >
              Comenzar gratis
            </Link>

            <div className="fixed top-20 right-4 z-50 border-b-slate-400 text-black">
              <TourButton onClick={startTour} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
