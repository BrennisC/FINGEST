import TourButton from "@/components/TourButton";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { loginTourSteps } from "@/lib/tours";
import { Lock, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "login";
  const [tourInitiated, setTourInitiated] = useState(false);
  const tourAttemptedRef = React.useRef(false);

  const handleTourClose = React.useCallback(() => {
    markTourAsSeen(pageName);
  }, [markTourAsSeen, pageName]);

  const { startTour, closeTour, isOpen } = useTour({
    steps: loginTourSteps,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    // TODO: Implement real authentication with backend
    setError("");
    navigate("/dashboard");
    localStorage.setItem("user", JSON.stringify({ email, password }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 login-logo">
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-slate-600 rounded-sm flex items-center justify-center text-white text-lg">
              💚
            </div>
            <span className="text-2xl font-bold text-foreground">FinGest</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bienvenido de vuelta
          </h1>
          <p className="text-gray-600">
            Inicia sesión en tu cuenta para acceder a tu panel
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-4 login-form">
          <div className="flex justify-end mb-2">
            <TourButton onClick={startTour} size="sm" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="login-email">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="login-password">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="login-button w-full bg-slate-600 text-white py-2 rounded-lg font-medium hover:bg-blue-900 transition mt-6"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <button className="text-sm text-slate-600 hover:text-blue-900">
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center login-register">
          <p className="text-gray-600 text-sm">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-slate-600 font-medium hover:text-blue-900"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
