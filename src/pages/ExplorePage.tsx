import Footer from "../components/Footer";
import { Header } from "../components/Header";
import ExploreSection from "../components/ExploreSection";

const Explorar = () => {
	return (
		<div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen flex flex-col">
			<Header />
			<ExploreSection />
			<Footer />
		</div>
	);
};

export default Explorar;