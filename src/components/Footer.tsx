import React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-slate-900/40 backdrop-blur-sm border-t border-slate-700/50 shadow-xl">
      <div className="flex items-center space-x-12">
        <nav>
          <ul className="flex space-x-8 text-white text-base font-normal">
            <li className="hover:text-slate-300 cursor-pointer">
              <Link to="/">Inicio</Link>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <Link to="/Contacto">Contacto</Link>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <a href="#">Términos y Condiciones</a>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <a href="#">Política de Privacidad</a>
            </li>
            <li className="hover:text-slate-300 cursor-pointer">
              <Link to="/SobreNosotros">Sobre nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>

      
    <div className="text-white text-sm">
        &copy; {new Date().getFullYear()} Neuryn
    </div>
    </div>
  );
};

export default Footer;