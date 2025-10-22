import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.slice(1).replace("-", " ").toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg border border-border p-12 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h1>
              <p className="text-muted-foreground mb-4">
                This page is on the roadmap! {pageName} will be available soon.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Feel free to reach out to our team if you have any feature requests.
              </p>
              <Link to="/dashboard" className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
