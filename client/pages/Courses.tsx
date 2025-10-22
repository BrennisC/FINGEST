import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function Courses() {
  const courses = [
    {
      title: "Fundamentos de Finanzas Personales",
      description: "Aprende los conceptos básicos de gestión de dinero",
      lessons: 12,
      progress: 40,
      instructor: "Carlos López",
    },
    {
      title: "Inversión para Principiantes",
      description: "Guía completa para comenzar a invertir",
      lessons: 18,
      progress: 25,
      instructor: "María García",
    },
    {
      title: "Planificación de Retiro",
      description: "Prepara tu futuro financiero correctamente",
      lessons: 15,
      progress: 0,
      instructor: "Juan Pérez",
    },
    {
      title: "Criptomonedas y Blockchain",
      description: "Entiende las monedas digitales",
      lessons: 20,
      progress: 60,
      instructor: "Carlos López",
    },
    {
      title: "Impuestos y Declaraciones",
      description: "Todo sobre impuestos personales",
      lessons: 14,
      progress: 75,
      instructor: "Ana Martínez",
    },
    {
      title: "Presupuesto y Ahorro",
      description: "Técnicas para ahorrar dinero efectivamente",
      lessons: 10,
      progress: 100,
      instructor: "Pedro Sánchez",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Cursos de Educación Financiera
                </h1>
                <p className="text-gray-600">
                  Aprende a gestionar tu dinero con nuestros cursos
                  especializados
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                <button className="px-4 py-2 text-sm font-medium text-slate-600 border-b-2 border-slate-600">
                  Todos
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-foreground">
                  En Progreso
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-foreground">
                  Completados
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-foreground">
                  Por Empezar
                </button>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 hover:border-slate-600 hover:shadow-sm transition"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-sm font-bold text-foreground flex-1">
                          {course.title}
                        </h3>
                        <span className="text-xl ml-2">
                          {idx % 3 === 0 ? "📖" : idx % 3 === 1 ? "💰" : "📊"}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 mb-4">
                        {course.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-600">
                              Progreso
                            </span>
                            <span className="text-xs font-bold text-foreground">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200">
                            <div
                              className="h-full bg-slate-600"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between text-xs text-gray-600">
                          <span>📚 {course.lessons} lecciones</span>
                          <span>👨‍🏫 {course.instructor}</span>
                        </div>
                      </div>

                      <button className="w-full bg-slate-600 text-white py-2 text-sm font-medium hover:bg-blue-900 transition">
                        {course.progress === 100
                          ? "Recertificar"
                          : course.progress > 0
                            ? "Continuar"
                            : "Empezar"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coming Soon */}
              <div className="mt-12 bg-white border border-gray-200 p-8 text-center">
                <p className="text-gray-600 mb-4">
                  ¿Quieres sugerir un nuevo curso?
                </p>
                <button className="bg-slate-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-900 transition">
                  Sugerir Curso
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
