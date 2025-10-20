import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';


// RightSidebar Component (Trending + Follow)
const RightSidebar = () => {
  const [following, setFollowing] = useState<any>({});

  const trends = [
    { name: 'Chat GPT 5', publications: '1.000.234' },
    { name: 'Deepseek', publications: '823.314' },
    { name: 'Sora', publications: '312.341' },
    { name: '#SaveJobDevelopers', publications: '245.654' },
    { name: 'Copilot', publications: '76.354' }
  ];

  const suggestions = [
    { name: 'SamAltman', handle: '@samaltman', title: 'CEO @OpenAI', verified: true },
    { name: 'MarkZuckerberg', handle: '@markzuckerberg', title: '@Meta', verified: true }
  ];

  const toggleFollow = (handle: string) => {
    setFollowing(prev => ({ ...prev, [handle]: !prev[handle] }));
  };

  return (
    <div className="min-h-screen from-slate-950 via-blue-950 to-slate-900 p-6 space-y-6">
      {/* Search + Filter */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar.."
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-full py-3 pl-12 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all"
          />
        </div>
        <button className="bg-slate-900/50 border border-slate-700/50 rounded-full px-5 py-3 text-slate-300 hover:bg-slate-800/70 hover:border-slate-600 transition-all flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          Filtrar
        </button>
      </div>

      {/* Tendencias */}
      <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-xl">
        <h2 className="text-white text-2xl font-bold mb-6">Tendencias</h2>
        <div className="space-y-5">
          {trends.map((trend, idx) => (
            <div key={idx} className="hover:bg-slate-800/30 -mx-3 px-3 py-2 rounded-xl transition-all cursor-pointer">
              <h3 className="text-white font-semibold text-lg mb-1">{trend.name}</h3>
              <p className="text-slate-400 text-sm">{trend.publications} publicaciones</p>
            </div>
          ))}
        </div>
      </div>

      {/* A quien seguir */}
      <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-xl">
        <h2 className="text-white text-2xl font-bold mb-6">A quien seguir</h2>
        <div className="space-y-4">
          {suggestions.map((user, idx) => (
            <div key={idx} className="flex items-center gap-4 hover:bg-slate-800/30 -mx-3 px-3 py-3 rounded-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-semibold text-base">{user.name}</span>
                  {user.verified && <span className="text-lg">🤖</span>}
                </div>
                <p className="text-slate-400 text-sm truncate">{user.handle} - {user.title}</p>
              </div>
              <button
                onClick={() => toggleFollow(user.handle)}
                className={`px-6 py-2 rounded-full font-medium transition-all flex-shrink-0 ${
                  following[user.handle] ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {following[user.handle] ? 'Siguiendo' : 'Seguir'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;