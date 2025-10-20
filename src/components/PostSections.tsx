import React, { useState, useEffect } from 'react';

// PostsSection Component
const PostsSection = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/db/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error cargando posts:', err));
  }, []);

  return (
    <div className="max-w-6xl pl-6 space-y-4 py-6 overflow-y-auto h-screen 
                    scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:bg-slate-700
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-transparent">
      {/* Botón Siguiendo */}
      <div className="mb-4 gap-4 flex">
        <button className="bg-slate-900/50 border border-slate-700/50 rounded-full px-6 py-2 text-white hover:bg-slate-800/70 transition-colors">
          Para ti
        </button>
        <button className="bg-slate-900/50 border border-slate-700/50 rounded-full px-6 py-2 text-white hover:bg-slate-800/70 transition-colors">
          Siguiendo
        </button>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:bg-slate-800/30 transition-all shadow-xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[15px]">{post.name}</span>
                <span className="text-slate-400 text-[14px]">{post.username}</span>
              </div>
            </div>

            <button className="text-slate-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M12 12h.01M18 12h.01" />
              </svg>
            </button>
          </div>

          {/* Texto */}
          <p className="text-white text-[15px] leading-relaxed mt-3">{post.text}</p>

          {/* Imágenes */}
          <div className="mt-3 flex flex-wrap gap-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              className="rounded-2xl border border-slate-700/50 w-[48%] object-cover"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              className="rounded-2xl border border-slate-700/50 w-[48%] object-cover"
            />
          </div>

          {/* Interacciones */}
          <div className="flex items-center justify-between text-slate-400 text-sm mt-4">
            <div className="flex items-center space-x-6">
              <span className="hover:text-white cursor-pointer">{post.comments}</span>
              <span className="hover:text-white cursor-pointer">{post.reposts}</span>
              <span className="hover:text-pink-500 cursor-pointer">{post.likes}</span>
              <span className="hover:text-white cursor-pointer">{post.views}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsSection;
