import { Database, Server, Code2, Shield, Lock, FileSearch, Globe, Zap } from 'lucide-react';

export function SkillsWindow() {

  const cyberSkills = [
    { name: 'SIEM (Splunk)', icon: Shield },         
    { name: 'SOAR Automation', icon: Zap },         
    { name: 'Incident Triage', icon: FileSearch },  
    { name: 'Log Analysis (SPL)', icon: Code2 },   
    { name: 'Wazuh', icon: Server },                
    { name: 'Network Monitoring', icon: Globe },   
  ];

  const mernSkills = [
    { name: 'React', icon: Code2 },
    { name: 'Node.js', icon: Zap },
    { name: 'MongoDB', icon: Database },
    { name: 'Express.js', icon: Server },
  ];

  return (
    <div className="p-10 max-h-[600px] overflow-y-auto text-white">
      <div className="space-y-12">

        {/* Cybersecurity */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 tracking-tight">Cybersecurity</h3>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            {cyberSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/30 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-4 shadow-inner shadow-black/30">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium text-center leading-snug">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* MERN Stack */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 tracking-tight">MERN Stack</h3>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            {mernSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/30 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-4 shadow-inner shadow-black/30">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium text-center leading-snug">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-5 tracking-tight">Tools & Technologies</h4>

          <div className="flex flex-wrap gap-3">
            {[
              'Splunk', 'Wazuh', 'Shuffle SOAR', 'TheHive', 'VirusTotal API',
              'Kali Linux', 'SPL (Search)', 'Docker', 'Linux', 'Git',
              'REST APIs', 'Threat Intelligence'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm shadow-sm shadow-black/20 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
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
