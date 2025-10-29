import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Font from "react-font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
    </div>
  );
}
