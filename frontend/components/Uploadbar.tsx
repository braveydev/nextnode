export default function Uploadbar() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* 1. THE WRITING BOX (Post Creator) */}
        <div className="flex-2 bg-[#1a1a1a] border-[0.5px] border-gray-500 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            </div>
            <span className="text-xs text-gray-500 font-mono ml-2">new_post.md</span>
          </div>

          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Title of your update..."
              className="w-full bg-transparent border-b border-gray-800 py-2 text-white font-bold focus:outline-none focus:border-fuchsia-500 transition-colors"
            />
            <textarea 
              placeholder="Write your description here..."
              rows={3}
              className="w-full bg-transparent text-gray-300 font-sarala resize-none focus:outline-none"
            ></textarea>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(192,38,211,0.4)] active:scale-95">
              Push to Neon
            </button>
          </div>
        </div>

        {/* 2. THE COOL SHI (Animated Activity Card) */}
        <div className="flex-1 bg-[#1a1a1a] border-[0.5px] border-gray-500 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          {/* Background Animation Layer */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent animate-pulse"></div>
          </div>

          <div className="relative z-10 text-center">
             {/* The "Cool" Animation: A rotating/pulsing ring */}
            <div className="relative mb-4 flex justify-center">
                <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full"></div>
                <div className="absolute top-0 w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                <div className="absolute top-4 w-8 h-8 bg-blue-500/20 rounded-full animate-ping"></div>
            </div>
            
            <h4 className="text-white font-bold text-sm">Real-time Stream</h4>
            <p className="text-gray-500 text-[10px] mt-1 font-mono uppercase tracking-widest">Awaiting Input...</p>
            
            <button className="mt-6 text-xs text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded-md transition-colors">
              Refresh Feed
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}