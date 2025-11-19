import { Database, Server, Code2, Shield, Lock, FileSearch, Globe, Zap } from 'lucide-react';

export function SkillsWindow() {
  const mernSkills = [
    { name: 'MongoDB', icon: Database },
    { name: 'Express.js', icon: Server },
    { name: 'React', icon: Code2 },
    { name: 'Node.js', icon: Zap },
  ];

  const cyberSkills = [
    { name: 'Network Security', icon: Shield },
    { name: 'Cryptography', icon: Lock },
    { name: 'Pen Testing', icon: FileSearch },
    { name: 'Web Security', icon: Globe },
  ];

  return (
    <div className="p-10 max-h-[600px] overflow-y-auto">
      <div className="space-y-8">
        {/* MERN Stack */}
        <div>
          <h3 className="text-white text-xl mb-5">MERN Stack</h3>
          <div className="grid grid-cols-4 gap-4">
            {mernSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="flex flex-col items-center p-5 bg-white/5 rounded-xl border border-[#2A2A2A] hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3 border border-cyan-500/20">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-white/80 text-sm text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cybersecurity */}
        <div>
          <h3 className="text-white text-xl mb-5">Cybersecurity</h3>
          <div className="grid grid-cols-4 gap-4">
            {cyberSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="flex flex-col items-center p-5 bg-white/5 rounded-xl border border-[#2A2A2A] hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 border border-blue-500/20">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white/80 text-sm text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Tools */}
        <div>
          <h4 className="text-white/80 text-lg mb-4">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {['Git', 'Docker', 'Linux', 'TypeScript', 'Tailwind', 'REST APIs', 'JWT', 'Kali Linux'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/5 border border-[#2A2A2A] rounded-lg text-white/70 text-sm hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
