import React, { Suspense } from "react";
const Footer = React.lazy(() => import("../components/Footer"));
const ExploreSection = React.lazy(() => import("../components/ExploreSection"));
import { Header } from "../components/Header";

const Explorar = () => {
	return (
		<main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col">
			<Header />
			<section className="flex-1 flex items-center justify-center px-2 sm:px-4 py-6" aria-label="Explorar comunidades">
				<Suspense fallback={<div className="text-white">Cargando...</div>}>
					<ExploreSection />
				</Suspense>
			</section>
			<Suspense fallback={<div className="text-white">Cargando...</div>}>
				<Footer />
			</Suspense>
		</main>
	);
};

export default Explorar;