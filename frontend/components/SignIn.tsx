export default function SignIn({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-[#1a1a1a] border border-gray-500 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl">✕</button>
        
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-white">Login</h2>
          <p className="text-gray-400 text-xs mt-1">Access your Neon database</p>
        </header>

        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition-all" />
          <input type="password" placeholder="Password" className="w-full bg-[#262626] border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition-all" />
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}