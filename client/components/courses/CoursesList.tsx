interface Course {
  title: string;
  description: string;
  lessons: number;
  progress: number;
  instructor: string;
}

export default function CoursesList({ courses }: { courses: Course[] }) {
  return (
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

            <p className="text-xs text-gray-600 mb-4">{course.description}</p>

            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Progreso</span>
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
  );
}
