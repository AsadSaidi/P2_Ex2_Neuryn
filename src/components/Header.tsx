import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => {
    return window.location.pathname === path
      ? "text-blue-400 font-semibold"
      : "";
  };

  return (
    <header className="relative z-30" role="banner">
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/40 backdrop-blur-sm border-b border-slate-700/50 shadow-xl">
        <div className="flex items-center space-x-12">
          <img
            className="w-12 h-auto cursor-pointer"
            src="../src/assets/cerebro.webp"
            alt="logo Neuryn"
            role="img"
          />

          {/* Desktop nav */}
          <nav className="hidden md:block" role="navigation" aria-label="Barra de navegación principal">
            <ul className="flex space-x-8 text-white text-base font-normal">
              <li className={`hover:text-slate-300 cursor-pointer ${isActive("/")}`} tabIndex={0}>
                <Link to="/" aria-label="Ir a inicio">Inicio</Link>
              </li>
              <li className={`hover:text-slate-300 cursor-pointer ${isActive("/Explorar")}`} tabIndex={0}>
                <Link to="/Explorar" aria-label="Ir a explorar">Explorar</Link>
              </li>
              <li className={`hover:text-slate-300 cursor-pointer ${isActive("/Comunidades")}`} tabIndex={0}>
                <Link to="/Comunidades" aria-label="Ir a comunidades">Comunidades</Link>
              </li>
              <li className={`hover:text-slate-300 cursor-pointer ${isActive("/Contacto")}`} tabIndex={0}>
                <Link to="/Contacto" aria-label="Ir a contacto">Contacto</Link>
              </li>
              <li className={`hover:text-slate-300 cursor-pointer ${isActive("/SobreNosotros")}`} tabIndex={0}>
                <Link to="/SobreNosotros" aria-label="Ir a sobre nosotros">Sobre nosotros</Link>
              </li>
              <li className={`hover:text-slate-300 cursor-pointer ${isActive("/Guia")}`} tabIndex={0}>
                <Link to="/Guia" aria-label="Ir a guía de estudio">Guía</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar-menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-6">
          <img
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
            src="../src/assets/agregar.webp"
            alt="agregar"
            role="button"
            tabIndex={0}
            aria-label="Agregar"
          />
          <img
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
            src="../src/assets/notificacion.webp"
            alt="notificacion"
            role="button"
            tabIndex={0}
            aria-label="Notificaciones"
          />
          <img
            className="w-8 h-8 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 object-cover"
            src="../src/assets/usuario.webp"
            alt="usuario"
            role="button"
            tabIndex={0}
            aria-label="Usuario"
          />
        </div>
      </div>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Cerrar menú"
          tabIndex={0}
          role="button"
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-menu"
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden shadow-2xl`}
        style={{ maxHeight: '100vh' }}
        role="navigation"
        aria-label="Menú lateral"
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setSidebarOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-16">
          <ul className="flex flex-col space-y-6 text-white text-lg px-8">
            <li className={isActive("/")} tabIndex={0}>
              <Link to="/" onClick={() => setSidebarOpen(false)} aria-label="Ir a inicio">Inicio</Link>
            </li>
            <li className={isActive("/Explorar")} tabIndex={0}>
              <Link to="/Explorar" onClick={() => setSidebarOpen(false)} aria-label="Ir a explorar">Explorar</Link>
            </li>
            <li className={isActive("/Comunidades")} tabIndex={0}>
              <Link to="/Comunidades" onClick={() => setSidebarOpen(false)} aria-label="Ir a comunidades">Comunidades</Link>
            </li>
            <li className={isActive("/Contacto")} tabIndex={0}>
              <Link to="/Contacto" onClick={() => setSidebarOpen(false)} aria-label="Ir a contacto">Contacto</Link>
            </li>
            <li className={isActive("/SobreNosotros")} tabIndex={0}>
              <Link to="/SobreNosotros" onClick={() => setSidebarOpen(false)} aria-label="Ir a sobre nosotros">Sobre nosotros</Link>
            </li>
            <li className={isActive("/Guia")} tabIndex={0}>
              <Link to="/Guia" onClick={() => setSidebarOpen(false)} aria-label="Ir a guía de estudio"> Guía</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
};