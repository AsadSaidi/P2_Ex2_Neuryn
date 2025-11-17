import { Header } from "../components/Header";
import PostsSection from "../components/PostSections";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

 const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen relative">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-[1fr_480px] gap-6">
        {/* Posts Section */}
        <div className="calc-h-[100vh-theme(spacing.32)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <PostsSection />
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block calc-h-[100vh-theme(spacing.32)]">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Home;