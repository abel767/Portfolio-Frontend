import me from '../../assets/me.png';

export function AboutWindow() {
  return (
    <div className="p-10 text-white">
      <div className="flex gap-10 items-start">

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/40">
            <img
              src={me}
              alt="Abel"
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-semibold tracking-tight">About Me</h2>

          <div className="space-y-5 text-gray-300 leading-relaxed text-[15px]">
            <p className="bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner shadow-black/20">
              Hey there! I'm a fresh face in the Cybersecurity world, certified with my 
              <span className="text-blue-400 font-medium"> CSA/CICSA</span>, and totally pumped to jump into a 
              <span className="text-blue-400 font-medium"> Security Analyst</span> role. I'm on the lookout for 
              awesome opportunities where I can put my skills to work right away.
            </p>

            <p className="bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner shadow-black/20">
              I learn by doing! My portfolio demonstrates hands-on expertise in building 
              security pipelines, focusing on centralized threat tracking and automating 
              incident response workflows. Plus, I have a background in the 
              <span className="text-blue-400 font-medium"> MERN stack</span>, giving me a solid coding foundation 
              to understand application vulnerabilities. I'm ready to contribute immediately 
              to optimizing security operations and defense strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
