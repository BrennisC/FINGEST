import Font from "react-font";

export default function Hero() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Font family="Fjalla One" onAllLoad={() => console.log("Font loaded")}>
          <p className="text-3xl pb-3">
            Simplificamos tus finanzas
            personales
          </p>
        </Font>
        <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
          Somos expertos en tecnología financiera comprometidos con democratizar
          el acceso a herramientas profesionales de gestión financiera.
        </p>
      </div>
    </section>
  );
}
