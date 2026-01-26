import { Header } from '../components/Header';
import Footer from '../components/Footer';

const StudyGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-xl space-y-8">
          {/* Título */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Guía de Estudio del Examen</h1>
            <p className="text-slate-300 text-lg">Resumen completo con teoría y ejemplos de todo lo que entra</p>
          </div>

          {/* 1. React Router y menú de navegación */}
          <section className="space-y-4 border-l-4 border-blue-500 pl-6">
            <h2 className="text-2xl font-bold text-blue-400">1. React Router y menú de navegación</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">🔹 Configuración básica de rutas</h3>
              <p className="text-slate-300">Debes saber cómo:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Instalar <code className="bg-slate-800 px-2 py-1 rounded">react-router-dom</code></li>
                <li>Usar <code className="bg-slate-800 px-2 py-1 rounded">&lt;BrowserRouter&gt;</code> como contenedor principal</li>
                <li>Definir rutas with <code className="bg-slate-800 px-2 py-1 rounded">&lt;Routes&gt;</code> y <code className="bg-slate-800 px-2 py-1 rounded">&lt;Route&gt;</code></li>
                <li>Navegar con <code className="bg-slate-800 px-2 py-1 rounded">&lt;Link&gt;</code> o <code className="bg-slate-800 px-2 py-1 rounded">&lt;NavLink&gt;</code></li>
              </ul>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Ejemplo de configuración:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Menú de navegación</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>El menú debe estar visible en <strong>todas las páginas</strong></li>
                <li>La navegación ocurre <strong>sin recargar la página</strong></li>
                <li>Usa <code className="bg-slate-800 px-2 py-1 rounded">NavLink</code> con propiedad <code className="bg-slate-800 px-2 py-1 rounded">isActive</code> para estilos especiales</li>
              </ul>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Indicador de página activa:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`<NavLink 
  to="/explorar" 
  className={({isActive}) => isActive ? 'text-blue-400 font-bold' : 'text-white'}
>
  Explorar
</NavLink>`}
                </pre>
              </div>
            </div>
          </section>

          {/* 2. Hooks: useRef */}
          <section className="space-y-4 border-l-4 border-purple-500 pl-6">
            <h2 className="text-2xl font-bold text-purple-400">2. Hooks de React: useRef</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">🔹 Qué es useRef</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Permite <strong>acceso directo a elementos del DOM</strong></li>
                <li>NO provoca re-render cuando cambia su valor</li>
                <li>Se persiste entre renders</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4">🔹 Casos de uso típicos</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Poner foco en un input con un botón</li>
                <li>Input con foco automático al cargar</li>
                <li>Guardar ID de intervalos o timers</li>
              </ul>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Ejemplo: Foco automático en input</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`import { useRef, useEffect } from 'react';

function SearchForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Buscar..." />;
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 useRef vs useState</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="font-semibold text-blue-400 mb-2">useState</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                    <li>Provoca re-render</li>
                    <li>Actualiza la UI</li>
                    <li>Crea nuevas versiones</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="font-semibold text-purple-400 mb-2">useRef</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                    <li>NO provoca re-render</li>
                    <li>Acceso directo al DOM</li>
                    <li>Persiste entre renders</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Accesibilidad */}
          <section className="space-y-4 border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-bold text-green-400"> 3. Accesibilidad web (ARIA + WCAG)</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">🔹 ARIA</h3>
              <p className="text-slate-300"><strong>ARIA</strong> = Accessible Rich Internet Applications</p>
              <p className="text-slate-300">Sirve para <strong>ayudar a lectores de pantalla</strong> a entender la web</p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Atributos ARIA más importantes:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`<!-- Etiqueta para inputs sin label visible -->
<input aria-label="Buscar..." type="text" />

<!-- Declarar que un div es un botón -->
<div role="button" tabIndex="0">
  Haz clic
</div>

<!-- Menú con navegación semántica -->
<nav role="navigation">
  <ul>
    <li><a href="#home">Inicio</a></li>
  </ul>
</nav>`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 WCAG</h3>
              <p className="text-slate-300"><strong>WCAG</strong> = Web Content Accessibility Guidelines</p>
              <p className="text-slate-300">Directrices para hacer webs <strong>perceptibles, operables y comprensibles</strong></p>

              <div className="space-y-2 text-slate-300 mt-3">
                <p><strong>Reglas clave:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Texto alternativo en imágenes con <code className="bg-slate-800 px-2 py-1 rounded">alt</code></li>
                  <li>Botones con texto accesible (no solo iconos)</li>
                  <li>Contraste mínimo de <strong>4.5:1</strong> (nivel AA) para texto</li>
                  <li>Navegación por teclado funcional</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">❌ Ejemplo de contraste incorrecto:</p>
                <div className="bg-gray-200 text-gray-300 p-3 rounded">Gris claro sobre blanco - NO se ve bien</div>
                <p className="font-semibold text-white mt-4 mb-2">✅ Ejemplo de contraste correcto:</p>
                <div className="bg-white text-gray-900 p-3 rounded">Texto oscuro sobre blanco - Se ve bien</div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Navegación por teclado</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Usar <code className="bg-slate-800 px-2 py-1 rounded">tabIndex="0"</code> en elementos interactivos personalizados</li>
                <li>La web debe ser completamente usable solo con <strong>TAB</strong></li>
                <li>Manejar eventos <code className="bg-slate-800 px-2 py-1 rounded">onKeyDown</code> para Enter y Space</li>
              </ul>
            </div>
          </section>

          {/* 4. Web Responsive */}
          <section className="space-y-4 border-l-4 border-orange-500 pl-6">
            <h2 className="text-2xl font-bold text-orange-400"> 4. Web Responsive y Media Queries</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">🔹 Qué es una web responsive</h3>
              <p className="text-slate-300">Una web que se <strong>adapta automáticamente</strong> a diferentes tamaños de pantalla (móvil, tablet, escritorio)</p>

              <h3 className="text-xl font-semibold text-white mt-4">🔹 Media Queries</h3>
              <p className="text-slate-300">Permiten aplicar estilos <strong>diferentes según la pantalla</strong></p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Ejemplo de media queries:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`/* Por defecto (móvil) */
.sidebar {
  display: none;
}

/* Tablet y superior */
@media (min-width: 768px) {
  .sidebar {
    display: block;
    width: 250px;
  }
}

/* Escritorio */
@media (min-width: 1024px) {
  .sidebar {
    width: 300px;
  }
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Breakpoints típicos</h3>
              <div className="space-y-2 text-slate-300">
                <ul className="list-disc list-inside space-y-2">
                  <li><code className="bg-slate-800 px-2 py-1 rounded">&lt; 768px</code> → Móvil</li>
                  <li><code className="bg-slate-800 px-2 py-1 rounded">768px - 1024px</code> → Tablet</li>
                  <li><code className="bg-slate-800 px-2 py-1 rounded">&gt; 1024px</code> → Escritorio</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Cambios típicos en responsive</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Mostrar menú hamburguesa en móvil, menú normal en escritorio</li>
                <li>Cambiar tamaño de fuentes</li>
                <li>Pasar de grid 3 columnas a 1 columna</li>
                <li>Ocultar sidebar en móvil</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Testing de responsividad</h3>
              <p className="text-slate-300">Usa el <strong>Inspector del navegador</strong> (F12) → Modo de dispositivos → Prueba en móvil, tablet y escritorio</p>
            </div>
          </section>

          {/* 5. Multimedia */}
          <section className="space-y-4 border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-400"> 5. Contenido multimedia en React</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">🔹 Galería de imágenes</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Usar formatos optimizados: <strong>WebP / AVIF</strong></li>
                <li>Incluir siempre <code className="bg-slate-800 px-2 py-1 rounded">alt</code> descriptivo</li>
                <li>Usar <code className="bg-slate-800 px-2 py-1 rounded">loading="lazy"</code> para optimizar</li>
                <li>Usar <code className="bg-slate-800 px-2 py-1 rounded">srcSet</code> y <code className="bg-slate-800 px-2 py-1 rounded">sizes</code> para imágenes responsive</li>
              </ul>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Ejemplo de imagen optimizada y responsive:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`<img 
  src="foto-640.webp" 
  srcSet="foto-320.webp 320w, foto-640.webp 640w, foto-1280.webp 1280w" 
  sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1280px" 
  alt="Descripción de la foto" 
  loading="lazy"
  width="400"
  height="300"
/>`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Audio</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Crear componente <code className="bg-slate-800 px-2 py-1 rounded">AudioPlayer</code> independiente</li>
                <li>Mínimo <strong>2 formatos</strong>: MP3 y OGG</li>
                <li>Incluir atributo <code className="bg-slate-800 px-2 py-1 rounded">controls</code></li>
                <li>NO usar autoplay con sonido</li>
              </ul>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Componente AudioPlayer:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`function AudioPlayer({ src }) {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      <source src={src.replace('.mp3', '.ogg')} type="audio/ogg" />
      Tu navegador no soporta audio.
    </audio>
  );
}`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Video</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Crear componente <code className="bg-slate-800 px-2 py-1 rounded">VideoPlayer</code> independiente</li>
                <li>Mínimo <strong>2 formatos</strong>: MP4 y WebM</li>
                <li>Incluir <code className="bg-slate-800 px-2 py-1 rounded">controls</code></li>
                <li>Usar <code className="bg-slate-800 px-2 py-1 rounded">loading="lazy"</code> si no está en primera pantalla</li>
                <li>Considerar subtítulos (accesibilidad)</li>
              </ul>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-3">
                <p className="font-semibold text-white mb-2">Componente VideoPlayer:</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">
{`function VideoPlayer({ src }) {
  return (
    <video controls loading="lazy">
      <source src={src} type="video/mp4" />
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
      <track kind="subtitles" src="subtitles.vtt" srclang="es" label="Español" />
      Tu navegador no soporta video.
    </video>
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* 6. Organización */}
          <section className="space-y-4 border-l-4 border-indigo-500 pl-6">
            <h2 className="text-2xl font-bold text-indigo-400"> 6. Organización y buenas prácticas</h2>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">🔹 Estructura de carpetas</h3>
              <pre className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto">
{`src/
  ├── components/
  │   ├── Header.tsx
  │   ├── Navbar.tsx
  │   ├── Footer.tsx
  │   ├── AudioPlayer.tsx
  │   ├── VideoPlayer.tsx
  │   └── Gallery.tsx
  ├── pages/
  │   ├── HomePage.tsx
  │   ├── ExplorePage.tsx
  │   └── ...
  ├── App.tsx
  └── main.tsx`}
              </pre>

              <h3 className="text-xl font-semibold text-white mt-6">🔹 Buenas prácticas</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Separar lógica en componentes reutilizables</li>
                <li>Importar y exportar correctamente</li>
                <li>Evitar autoplay con sonido automático</li>
                <li>Comprimir imágenes y videos</li>
                <li>Verificar compatibilidad en <strong>CanIUse.com</strong></li>
                <li>Usar formatos modernos (WebP, AVIF)</li>
                <li>Optimizar peso de recursos</li>
              </ul>
            </div>
          </section>

          {/* Resumen final */}
          <section className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 rounded-lg p-6 mt-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">🧠 Lo que MÁS seguro entra en el examen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-slate-300">✅ React Router + Navbar</p>
                <p className="text-slate-300">✅ useRef (focus y diferencia con useState)</p>
                <p className="text-slate-300">✅ ARIA (aria-label, role)</p>
              </div>
              <div className="space-y-2">
                <p className="text-slate-300">✅ WCAG (contraste, accesibilidad real)</p>
                <p className="text-slate-300">✅ Media Queries + responsive</p>
                <p className="text-slate-300">✅ Multimedia accesible y optimizado</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyGuidePage;
