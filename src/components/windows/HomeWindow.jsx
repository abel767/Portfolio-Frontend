export function HomeWindow() {
  return (
    <div className="p-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-white text-5xl">Abel</h1>
          <p className="text-[#B0B0B0] text-xl">MERN Developer & Cybersecurity Learner</p>
        </div>

        <div className="border-t border-[#2A2A2A] pt-6">
          <p className="text-[#B0B0B0] leading-relaxed max-w-lg">
            Welcome to my portfolio. I craft modern web applications using the MERN stack 
            and continuously expand my knowledge in cybersecurity to build secure, robust solutions.
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors border border-[#2A2A2A]">
            View Work
          </button>
          <button className="px-6 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors border border-cyan-500/30">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
