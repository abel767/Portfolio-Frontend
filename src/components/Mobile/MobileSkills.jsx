import { Database, Server, Code2, Shield, Lock, FileSearch, Globe, Zap } from 'lucide-react';

export default function MobileSkills() {
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

  const tools = [
    'Splunk', 'Wazuh', 'Shuffle SOAR', 'TheHive', 'VirusTotal API',
    'Kali Linux', 'SPL (Search)', 'Docker', 'Linux', 'Git',
    'REST APIs', 'Threat Intelligence'
  ];

  return (
    <div className="px-5 py-10 text-white">

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>

      {/* CYBERSECURITY */}
      <div className="mb-12">
        <h3 className="text-2xl font-medium mb-4">Cybersecurity</h3>

        <div className="grid grid-cols-2 gap-5">
          {cyberSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="
                  flex flex-col items-center p-5 rounded-2xl
                  bg-white/5 border border-white/10 backdrop-blur
                  hover:bg-white/10 transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-gray-200 text-xs text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MERN STACK */}
      <div className="mb-12">
        <h3 className="text-2xl font-medium mb-4">MERN Stack</h3>

        <div className="grid grid-cols-2 gap-5">
          {mernSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="
                  flex flex-col items-center p-5 rounded-2xl
                  bg-white/5 border border-white/10 backdrop-blur
                  hover:bg-white/10 transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-gray-200 text-xs text-center">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* TOOLS & TECHNOLOGIES */}
      <div>
        <h3 className="text-2xl font-medium mb-4">Tools & Technologies</h3>

        <div className="flex flex-wrap gap-3">
          {tools.map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-2 rounded-lg text-sm
                bg-white/5 border border-white/10
                text-gray-300 backdrop-blur
                hover:bg-white/10 transition-all
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
