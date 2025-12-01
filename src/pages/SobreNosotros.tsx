import { Header } from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import AudioPlayer from "../components/AudioPlayer";

const SobreNosotros = () => {
    return (
       <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col relative overflow-hidden">
            {/* Video de fondo */}
            <VideoPlayer/>
            <div className="relative z-10 flex-1 flex flex-col">
              <Header />
              <div className="flex-1 flex items-center justify-center flex-col px-6 py-12 space-y-6">
                <h1 className="text-4xl font-bold mb-4 text-white">Sobre Nosotros</h1>
                  <p className="text-lg text-slate-300 max-w-2xl text-center">
                   En Neuryn, nuestra misión es conectar mentes curiosas y fomentar una comunidad vibrante donde las ideas fluyan libremente. Fundada en 2023, Neuryn ha crecido rápidamente para convertirse en un espacio donde los usuarios pueden explorar, compartir y colaborar en proyectos innovadores.
                  </p>
                  <p className="text-lg text-slate-300 max-w-2xl text-center mt-4">
                      Nuestro equipo está compuesto por apasionados de la tecnología y el diseño, dedicados a crear una plataforma intuitiva y segura. Creemos en el poder de la colaboración y estamos comprometidos a proporcionar las mejores herramientas para que nuestros usuarios prosperen.
                  </p>
                  <p className="text-lg text-slate-300 max-w-2xl text-center mt-4">
                      Gracias por ser parte de Neuryn. Juntos, estamos construyendo el futuro de la interacción digital.
                  </p>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Un mensaje especial de nuestro CEO:
                  </h2>
                  <AudioPlayer/>
              </div>
              <Footer />
            </div>
        </div>
    );
};

export default SobreNosotros;
