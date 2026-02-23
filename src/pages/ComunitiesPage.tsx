import React, { Suspense } from "react";
const Footer = React.lazy(() => import("../components/Footer"));
const ComunitiesSection = React.lazy(() => import("../components/ComunitiesSection"));
import { Header } from "../components/Header";

const ComunitiesPage = () => {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex items-center justify-center px-2 sm:px-4 py-6" aria-label="Comunidades">
        <Suspense fallback={<div className="text-white">Cargando...</div>}>
          <ComunitiesSection />
        </Suspense>
      </section>
      <Suspense fallback={<div className="text-white">Cargando...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default ComunitiesPage;
