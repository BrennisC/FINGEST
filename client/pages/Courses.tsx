import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import CoursesList from "@/components/courses/CoursesList";

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
              <CoursesList courses={courses} />
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
