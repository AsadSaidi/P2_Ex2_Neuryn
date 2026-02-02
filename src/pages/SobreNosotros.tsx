import React, { Suspense } from "react";
const Footer = React.lazy(() => import("../components/Footer"));
const VideoPlayer = React.lazy(() => import("../components/VideoPlayer"));
const AudioPlayer = React.lazy(() => import("../components/AudioPlayer"));
import { Header } from "../components/Header";

const SobreNosotros = () => {
    return (
       <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col relative overflow-hidden">
            {/* Video de fondo */}
            <Suspense fallback={<div className="text-white">Cargando video...</div>}>
              <VideoPlayer/>
            </Suspense>
            <div className="relative z-10 flex-1 flex flex-col">
              <Header />
              <section className="flex-1 flex items-center justify-center flex-col px-2 sm:px-4 py-6 space-y-6" aria-label="Sobre nosotros">
                <h1 className="text-4xl font-bold mb-4 text-white text-center">Sobre Nosotros</h1>
                  <p className="text-lg text-slate-300 max-w-2xl text-center">
                   En Neuryn, nuestra misión es conectar mentes curiosas y fomentar una comunidad vibrante donde las ideas fluyan libremente. Fundada en 2023, Neuryn ha crecido rápidamente para convertirse en un espacio donde los usuarios pueden explorar, compartir y colaborar en proyectos innovadores.
                  </p>
                  <p className="text-lg text-slate-300 max-w-2xl text-center mt-4">
                      Nuestro equipo está compuesto por apasionados de la tecnología y el diseño, dedicados a crear una plataforma intuitiva y segura. Creemos en el poder de la colaboración y estamos comprometidos a proporcionar las mejores herramientas para que nuestros usuarios prosperen.
                  </p>
                  <p className="text-lg text-slate-300 max-w-2xl text-center mt-4">
                      Gracias por ser parte de Neuryn. Juntos, estamos construyendo el futuro de la interacción digital.
                  </p>
                  <h2 className="text-2xl font-bold mb-4 text-white text-center">
                    Un mensaje especial de nuestro CEO:
                  </h2>
                  <Suspense fallback={<div className="text-white">Cargando audio...</div>}>
                    <AudioPlayer/>
                  </Suspense>
              </section>
              <Suspense fallback={<div className="text-white">Cargando...</div>}>
                <Footer />
              </Suspense>
            </div>
        </main>
    );
};

export default SobreNosotros;
