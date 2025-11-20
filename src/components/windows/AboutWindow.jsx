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
        Hey there! I'm a fresh face in the Cybersecurity world, certified with my CSA/CICSA, and totally pumped to jump into a Security Analyst role. I'm on the lookout for awesome opportunities where I can put my skills to work right away.
    </p>
    
    <p>
       I learn by doing! My portfolio demonstrates hands-on expertise in building security pipelines, focusing on centralized threat tracking and automating incident response workflows. Plus, I have a background in the MERN stack, giving me a solid coding foundation to understand application vulnerabilities. I'm ready to contribute immediately to optimizing security operations and defense strategies.
    </p>
</div>

        </div>
      </div>
    </div>
  );
}