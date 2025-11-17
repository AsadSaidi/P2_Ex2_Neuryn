const comunidades = [
  {
    nombre: "React Developers",
    descripcion: "Comunidad para desarrolladores de React, comparte recursos y dudas.",
    miembros: 1240,
  },
  {
    nombre: "AI & Machine Learning",
    descripcion: "Todo sobre inteligencia artificial y machine learning.",
    miembros: 980,
  },
  {
    nombre: "Diseño UI/UX",
    descripcion: "Espacio para diseñadores de interfaces y experiencia de usuario.",
    miembros: 670,
  },
  {
    nombre: "Open Source",
    descripcion: "Colabora y aprende sobre proyectos open source.",
    miembros: 430,
  },
];

const ComunitiesSection = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Comunidades</h1>
        <div className="space-y-6">
          {comunidades.map((comunidad, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:bg-slate-800/30 transition-all cursor-pointer">
              <h2 className="text-white text-2xl font-semibold mb-2">{comunidad.nombre}</h2>
              <p className="text-slate-300 mb-2">{comunidad.descripcion}</p>
              <span className="text-blue-400 font-bold">{comunidad.miembros} miembros</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComunitiesSection;
