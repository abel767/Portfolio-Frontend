import me from '../../assets/me.png';

export function AboutWindow() {
  return (
    <div className="p-10">
      <div className="flex gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="rounded-xl overflow-hidden border-2 border-[#2A2A2A]">
            <img
              src={me}
              alt="Abel"
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>
        {/* Bio */}
        <div className="flex-1 space-y-5">
          <h2 className="text-white text-3xl">About Me</h2>
          
          <div className="space-y-4 text-[#B0B0B0] leading-relaxed">
            <p>
              I'm a passionate full-stack developer specializing in the MERN stack. 
              I build scalable web applications with modern technologies and best practices.
            </p>
            
            <p>
              Currently expanding into cybersecurity, learning to identify vulnerabilities 
              and implement secure coding practices to protect applications from threats.
            </p>
          </div>
          <div className="pt-4 flex flex-wrap gap-2">
            <span className="px-4 py-1.5 bg-white/5 border border-[#2A2A2A] rounded-lg text-white/80 text-sm">
              Problem Solver
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-[#2A2A2A] rounded-lg text-white/80 text-sm">
              Quick Learner
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-[#2A2A2A] rounded-lg text-white/80 text-sm">
              Team Player
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}