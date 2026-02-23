import { Header } from "../components/Header";
import PostsSection from "../components/PostSections";
import React, { Suspense } from "react";
const Sidebar = React.lazy(() => import("../components/Sidebar"));
const Footer = React.lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen relative">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-6">
        {/* Posts Section */}
        <section className="calc-h-[100vh-theme(spacing.32)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" aria-label="Sección de publicaciones">
          <PostsSection />
        </section>

        {/* Sidebar */}
        <aside className="hidden lg:block calc-h-[100vh-theme(spacing.32)]" aria-label="Barra lateral de tendencias y sugerencias">
          <Suspense fallback={<div className="text-white">Cargando...</div>}>
            <Sidebar />
          </Suspense>
        </aside>
      </div>
      <Suspense fallback={<div className="text-white">Cargando...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;