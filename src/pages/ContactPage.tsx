import Footer from "../components/Footer";
import Formulario from "../components/Form";
import { Header } from "../components/Header";

const Contacto = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <Formulario />
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;