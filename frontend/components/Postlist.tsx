"use client";

import { useState } from "react";

// Mock data - Complete set to demonstrate the "Every 3" pagination
const projectsData = [
  { id: 1, title: "Initial Database Sync", description: "Successfully connected the Express backend to the Neon PostgreSQL instance using Prisma. Schema migrations are now automated." },
  { id: 2, title: "Auth Middleware Implementation", description: "Finished the JWT verification middleware. Protected routes now correctly identify users via HTTP-only cookies." },
  { id: 3, title: "Tailwind UI Overhaul", description: "Converted all legacy CSS into modern Tailwind utility classes. Implemented the custom dark theme and glow effects." },
  { id: 4, title: "API Endpoint Optimization", description: "Refactored the post retrieval logic to support pagination, reducing initial load times by 40%." },
  { id: 5, title: "Next.js Integration", description: "Moved the frontend to Next.js for better SEO and faster server-side rendering of the post feed." },
  { id: 6, title: "Input Validation Logic", description: "Added Zod schema validation to all auth routes to prevent malicious or malformed data from hitting the DB." },
  { id: 7, title: "Environment Security", description: "Completed a full audit of the .gitignore and verified that no secrets are present in the git history." },
];

export default function Postlist() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleEdit = (id: number) => {
    console.log("Editing post:", id);
    // Future step: setSelectedPost(id) and open Edit Modal
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      console.log("Deleting post:", id);
      // Future step: axios.delete(`/api/posts/${id}`)
    }
  };

  return (
    <section className="mx-auto mt-10 w-[82%] md:w-[68%] space-y-6 pb-20">
      {/* HEADER SECTION */}
      <div className="mb-8 border-l-4 border-blue-600 pl-4">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Recent Activity</h2>
        <p className="text-gray-500 text-sm font-sarala">Manage your updates and feed content.</p>
      </div>

      {/* THE POST LIST */}
      {projectsData.slice(0, visibleCount).map((post, index) => (
        <article 
          key={post.id}
          className="group relative bg-[#1a1a1a] border-[0.5px] border-gray-500 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-blue-500/10 hover:border-gray-400"
        >
          {/* Post Number Indicator */}
          <div className="absolute top-4 right-6 text-gray-600 font-mono text-sm group-hover:opacity-0 transition-opacity">
            #{index + 1}
          </div>

          <header className="mb-3">
            <h3 className="text-xl font-bold text-white underline decoration-1 underline-offset-8 decoration-gray-600 group-hover:decoration-blue-500 transition-all">
              {post.title}
            </h3>
          </header>

          <div className="font-sarala text-gray-300 leading-relaxed mb-6">
            <p>{post.description}</p>
          </div>

          {/* ACTIONS FOOTER */}
          <footer className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
            <div className="flex gap-6">
              {/* Edit Button */}
              <button 
                onClick={() => handleEdit(post.id)}
                className="text-xs font-bold text-emerald-500 hover:text-emerald-400 flex items-center gap-1.5 transition-colors group/btn"
              >
                <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                EDIT
              </button>

              {/* Delete Button */}
              <button 
                onClick={() => handleDelete(post.id)}
                className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1.5 transition-colors group/btn"
              >
                <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                DELETE
              </button>
            </div>

            <span className="text-[10px] text-gray-600 uppercase tracking-widest font-mono hidden sm:block">
              POST_REF: {post.id}00X
            </span>
          </footer>
        </article>
      ))}

      {/* PAGINATION / LOAD MORE AREA */}
      <div className="flex justify-center pt-8">
        {visibleCount < projectsData.length ? (
          <button 
            onClick={showMore}
            className="px-8 py-3 rounded-xl border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 font-bold text-sm flex items-center gap-3 bg-[#1a1a1a]"
          >
            <span>View More Posts</span>
            <span className="animate-bounce text-lg">↓</span>
          </button>
        ) : (
          <div className="text-gray-500 font-sarala text-sm italic flex flex-col items-center gap-2">
            <div className="w-16 h-1px bg-gray-800 mb-2"></div>
            <p>You've reached the end of the line</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-blue-500 hover:underline mt-2 not-italic font-bold tracking-tight"
            >
              BACK TO TOP ↑
            </button>
          </div>
        )}
      </div>
    </section>
  );
}