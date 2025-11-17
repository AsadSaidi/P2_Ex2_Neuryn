import { Link } from 'react-router-dom';

export const Header = () => {

  const isActive = (path: string) => {
    return window.location.pathname === path
      ? "text-blue-400 font-semibold"
      : "";
  }
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-slate-900/40 backdrop-blur-sm border-b border-slate-700/50 shadow-xl">
      {/* Logo y Navegación juntos */}
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <img
          className="w-12 h-auto cursor-pointer"
          src="../src/assets/cerebro.png"
          alt="logo"
        />

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-8 text-white text-base font-normal">
            <li className={`hover:text-slate-300 cursor-pointer ${isActive("/")}`}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={`hover:text-slate-300 cursor-pointer ${isActive("/explorar")}`}>
              <Link to="/explorar">Explorar</Link>
            </li>
            <li className={`hover:text-slate-300 cursor-pointer ${isActive("/comunidades")}`}>
              <Link to="/comunidades">Comunidades</Link>
            </li>
            <li className={`hover:text-slate-300 cursor-pointer ${isActive("/Contacto")}`}>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Iconos de acciones */}
      <div className="flex items-center space-x-6">
        <img
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
          src="../src/assets/agregar.png"
          alt="agregar"
        />
        <img
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
          src="../src/assets/notificacion.png"
          alt="notificacion"
        />
        <img
          className="w-8 h-8 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
          src="../src/assets/usuario.png"
          alt="usuario"
        />
      </div>
    </div>
  );
};
