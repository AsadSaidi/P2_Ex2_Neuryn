import { Header } from "../components/Header";
import PostsSection from "../components/PostSections";

import Sidebar from "../components/Sidebar";

 const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen">
  <Header />
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-[1fr_480px] gap-6">
    {/* Posts Section */}
    <div className="h-screen overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
      <PostsSection />
    </div>

    {/* Sidebar */}
    <div className="hidden lg:block h-screen">
      <Sidebar />
    </div>
  </div>
</div>

  );
};

export default Home;