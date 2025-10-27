import React, { useState, useEffect } from 'react';

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
              <span className="hover:text-white cursor-pointer flex row-gap-2 items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                  <path d="M480-80 373-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H587L480-80Zm0-144 64-96h256v-480H160v480h256l64 96Zm0-336Z"/>
                </svg>
                {post.comments} 
              </span>
              <span className="hover:text-white cursor-pointer flex row-gap-2 items-center gap-1">
                <img src="../src/assets/repeat.png" alt="compartir"/>
                {post.reposts}
              </span>
              <span className="hover:text-pink-500 cursor-pointer flex row-gap-2 items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3">
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                </svg>
                {post.likes}
              </span>
              <span className="hover:text-white cursor-pointer flex row-gap-2 items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>

                {post.views}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsSection;
