export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-base mb-4">FinGest</h3>
            <p className="text-sm text-gray-300">
              Gestiona tus finanzas personales con inteligencia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Producto</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; 2025 FinGest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
