import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Font from "react-font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Font family="Fjalla One" onAllLoad={() => console.log("Font loaded")}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </Font>
    </div>
  );
}
