import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Shield, Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#4513b8' }} className="text-white">
      {/* Beneficios */}
      <div className="border-t border-white/20" style={{ backgroundColor: '#360fa0' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Envíos con pago</h4>
                <p className="text-xs text-indigo-200">contra entrega</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Garantía de</h4>
                <p className="text-xs text-indigo-200">funcionamiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="font-bold text-2xl" style={{ color: '#4513b8' }}>L</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Loperzaik</h2>
                <p className="text-sm text-indigo-200">Accesorios Tecnológicos</p>
              </div>
            </Link>
            <p className="text-indigo-100 text-sm mb-6 max-w-sm">
              Tu tienda de accesorios tecnológicos en Colombia. Audífonos, smartwatches, cargadores y más con los mejores precios.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#4513b8] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#4513b8] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#4513b8] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#4513b8] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link to="/categoria/audifonos" className="text-indigo-200 hover:text-white text-sm transition-colors">Audífonos</Link></li>
              <li><Link to="/categoria/smartwatch" className="text-indigo-200 hover:text-white text-sm transition-colors">Smartwatch</Link></li>
              <li><Link to="/categoria/cargadores" className="text-indigo-200 hover:text-white text-sm transition-colors">Cargadores</Link></li>
              <li><Link to="/categoria/accesorios-pc" className="text-indigo-200 hover:text-white text-sm transition-colors">Accesorios PC</Link></li>
              <li><Link to="/categoria/cables" className="text-indigo-200 hover:text-white text-sm transition-colors">Cables</Link></li>
            </ul>
          </div>

          {/* Atención al cliente */}
          <div>
            <h4 className="font-semibold text-white mb-4">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><Link to="/ayuda" className="text-indigo-200 hover:text-white text-sm transition-colors">Centro de Ayuda</Link></li>
              <li><Link to="/rastreo" className="text-indigo-200 hover:text-white text-sm transition-colors">Rastrea tu Pedido</Link></li>
              <li><Link to="/garantia" className="text-indigo-200 hover:text-white text-sm transition-colors">Garantía</Link></li>
              <li><Link to="/preguntas" className="text-indigo-200 hover:text-white text-sm transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/contacto" className="text-indigo-200 hover:text-white text-sm transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
                <span className="text-indigo-200 text-sm">Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-300 shrink-0" />
                <span className="text-indigo-200 text-sm">WhatsApp: 3045896399</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-300 shrink-0" />
                <span className="text-indigo-200 text-sm">info@loperzaik.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-medium text-white text-sm mb-2">Horario de Atención</h5>
              <p className="text-indigo-200 text-sm">Lunes a Viernes: 8am - 7pm</p>
              <p className="text-indigo-200 text-sm">Sábados: 9am - 5pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20" style={{ backgroundColor: '#360fa0' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-indigo-200 text-sm">
              © 2026 Loperzaik. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-indigo-200 text-sm">Pago contra entrega en toda Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
