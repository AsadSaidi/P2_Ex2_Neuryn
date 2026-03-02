import React, { Suspense } from "react";
const Footer = React.lazy(() => import("../components/Footer"));
const Formulario = React.lazy(() => import("../components/Form"));
import { Header } from "../components/Header";
import "../styles/contact.scss";

const Contacto = () => {
  return (
    <main className="contact-page">
      <Header />
      <section
        className="contact-page__main"
        aria-label="Formulario de contacto"
      >
        <Suspense fallback={<div className="text-white">Cargando...</div>}>
          <Formulario />
        </Suspense>
      </section>
      <Suspense fallback={<div className="text-white">Cargando...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Contacto;