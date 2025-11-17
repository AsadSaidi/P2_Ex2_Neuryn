import { Search, SlidersHorizontal } from "lucide-react";

const trends = [
	{ name: "Chat GPT 5", publications: "1.000.234" },
	{ name: "Deepseek", publications: "823.314" },
	{ name: "Sora", publications: "312.341" },
	{ name: "#SaveJobDevelopers", publications: "245.654" },
	{ name: "Copilot", publications: "76.354" },
];

const ExploreSection = () => {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="max-w-2xl w-full mx-auto flex flex-col gap-8">
				{/* Search Bar */}
				<div className="flex gap-3">
					<div className="flex-1 relative">
                        {/* Icono de búsqueda dentro de lucide-react*/}
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
						<input
							type="text"
							placeholder="Buscar tendencias..."
							className="w-full bg-slate-900/50 border border-slate-700/50 rounded-full py-3 pl-12 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all"
						/>
					</div>
					<button className="bg-slate-900/50 border border-slate-700/50 rounded-full px-5 py-3 text-slate-300 hover:bg-slate-800/70 hover:border-slate-600 transition-all flex items-center gap-2">
                        {/* Icono de filtros dentro de lucide-react */}
                        <SlidersHorizontal className="w-5 h-5" />
						Filtrar
					</button>
				</div>

				{/* Tendencias */}
				<div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-xl">
					<h2 className="text-white text-3xl font-bold mb-6 text-center">
						Tendencias
					</h2>
					<div className="space-y-5">
						{trends.map((trend, idx) => (
							<div
								key={idx}
								className="hover:bg-slate-800/30 -mx-3 px-3 py-3 rounded-xl transition-all cursor-pointer"
							>
								<h3 className="text-white font-semibold text-xl mb-1">
									{trend.name}
								</h3>
								<p className="text-slate-400 text-base">
									{trend.publications} publicaciones
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreSection;
