import TourButton from "@/components/TourButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { cn } from "@/lib/utils";
import { loginTourSteps } from "@/lib/tours";
import { ArrowLeft, Lock, Mail } from "lucide-react";
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
  }, [hasSeenTour, pageName, startTour, tourInitiated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    // TODO: Implement real authentication with backend
    setError("");
    navigate("/dashboard");
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  const handleHome = () => {
    navigate("/");
    localStorage.removeItem("user");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 login-logo">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 mb-4 transition-transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-lg shadow-md">
              💚
            </div>
            <span className="text-2xl font-bold text-primary">FinGest</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bienvenido de vuelta
          </h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Inicia sesión en tu cuenta para acceder a tu panel
          </p>
        </div>

        {/* Login Form */}
        <Card className="mb-6 border-0 shadow-lg login-form">
          <CardHeader className="relative pb-2">
            <div className="absolute right-4 top-4">
              <TourButton onClick={startTour} size="sm" />
            </div>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>
              Introduce tus credenciales para continuar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="login-email space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="pl-10 transition-all border-input focus-within:border-primary"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="login-password space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 transition-all border-input focus-within:border-primary"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive animate-in fade-in-50">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="login-button w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 mt-6"
              >
                Iniciar Sesión
              </Button>

              {/* Forgot Password Link */}
              <div className="text-center pt-1">
                <Button
                  variant="link"
                  className="text-sm text-primary hover:text-primary/80 p-0 h-auto"
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="relative w-full py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-2 text-xs text-muted-foreground">
                  O
                </span>
              </div>
            </div>

            <div className="text-center w-full login-register">
              <p className="text-muted-foreground text-sm mb-3">
                ¿No tienes cuenta?{" "}
                <Link
                  to="/register"
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Regístrate aquí
                </Link>
              </p>

              <Button
                variant="outline"
                onClick={handleHome}
                className="w-full flex items-center justify-center gap-2 transition-all"
              >
                <ArrowLeft size={16} />
                Volver a inicio
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FinGest. Todos los derechos reservados.
      </div>
    </div>
  );
}
