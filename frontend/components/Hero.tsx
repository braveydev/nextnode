export default function Hero() {
  return (
    <section className="mt-10 py-12 px-4 text-center">
      {/* Status Badge */}
      <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Neon DB Connected
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="bg-linear-to-r from-white via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Welcome Back, Joy
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-400 max-w-lg mx-auto font-sarala leading-relaxed">
        Manage your uploads and monitor your activity feed. 
        All data is <span className="text-gray-200">synced in real-time</span> with your 
        cloud infrastructure.
      </p>

      {/* Subtle Divider */}
      <div className="mt-8 flex justify-center">
        <div className="h-1px w-24 bg-linear-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>
    </section>
  )
}