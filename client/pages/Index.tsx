import Hero from "@/components/Hero";
import TourButton from "@/components/TourButton";
import { useTourContext } from "@/context/TourContext";
import useTour from "@/hooks/useTour";
import { indexTourSteps } from "@/lib/tours";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import Layout from "@/layout/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white border border-gray-200 p-8 text-center hover:border-slate-600 hover:shadow-sm transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-sm font-bold text-foreground mb-3">{title}</h3>
    <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function Index() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "index";
  const [tourInitiated, setTourInitiated] = useState(false);
  const tourAttemptedRef = React.useRef(false);

  // Stable onClose so the useTour hook doesn't receive a new function every render
  const handleTourClose = React.useCallback(() => {
    markTourAsSeen(pageName);
  }, [markTourAsSeen, pageName]);

  const { startTour, closeTour, isOpen } = useTour({
    steps: indexTourSteps,
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
    <Layout>
      {/* Tour Button */}
      <div className="fixed top-20 right-4 z-50">
        <TourButton onClick={startTour} />
      </div>
      <Header className="navigation-menu" />

      {/* Hero Section */}
      <div className="hero-section">
        <Hero />
      </div>

      {/* Features Section */}
      <section className="features-section bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="features-cards">
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon="🧠"
                title="Inteligencia Artificial"
                description="Algoritmos avanzados para análisis predictivo y recomendaciones personalizadas"
              />
              <FeatureCard
                icon="👥"
                title="Equipo Experto"
                description="Profesionales en finanzas y tecnología trabajando para tu éxito financiero"
              />
              <FeatureCard
                icon="❤️"
                title="Pasión por Ayudar"
                description="Cada funcionalidad está diseñado pensando en mejorar tu bienestar financiero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Nuestra misión es empoderara las personas con las herramientas
            financieras que necesitan para prosperar
          </p>
          <Link
            to="/dashboard"
            className="inline-block bg-slate-600 text-white px-8 py-3 font-semibold hover:bg-blue-900 transition rounded-sm"
          >
            Comenzar ahora
          </Link>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
