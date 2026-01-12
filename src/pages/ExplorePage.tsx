import Footer from "../components/Footer";
import { Header } from "../components/Header";
import ExploreSection from "../components/ExploreSection";

const Explorar = () => {
	return (
		<div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col">
			<Header />
			<div className="flex-1 flex items-center justify-center px-2 sm:px-4 py-6">
				<ExploreSection />
			</div>
			<Footer />
		</div>
	);
};

export default Explorar;