import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Layout from "./Layout";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-600 mb-6 leading-tight">
            Simplificamos tus finanzas
            <br />
            personales
          </h1>
          <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
            Somos expertos en tecnología financiera comprometidos con
            democratizar el acceso a herramientas profesionales de gestión
            financiera.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            *Nuestra misión es empoderara las personas con las herramientas
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
    </Layout>
  );
}
