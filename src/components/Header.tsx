export const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-[#050033]">
      {/* Logo */}
      <img
        className="w-20 h-auto cursor-pointer"
        src="../src/assets/cerebro.png"
        alt="logo"
      />

      {/* Navegación */}
      <nav>
        <ul className="flex space-x-8 text-white text-lg font-normal">
          <li className="hover:text-gray-300 cursor-pointer">
            <a>Inicio</a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <a>Explorar</a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <a>Comunidades</a>
          </li>
        </ul>
      </nav>

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
