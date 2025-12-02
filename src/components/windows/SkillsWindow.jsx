import { motion } from 'motion/react';
import { Database, Server, Code2, Shield, Lock, FileSearch, Globe, Zap } from 'lucide-react';

export default function SkillsWindow() {

  const cyberSkills = [
    { name: 'Security Operations & Incident Response', icon: Shield },
    { name: 'SIEM & Log Monitoring (Splunk, Wazuh)', icon: FileSearch },
    { name: 'Threat Intelligence & Hunting', icon: Lock },
    { name: 'Network & Endpoint Monitoring', icon: Globe },
    // { name: 'Application Security & Web Testing', icon: Code2 },
    { name: 'SOAR Automation (Shuffle, TheHive)', icon: Zap },
  ];

  const mernSkills = [
    { name: 'JavaScript', icon: Code2 },
    { name: 'React.js', icon: Code2 },
    { name: 'Node.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'Express.js', icon: Zap },
    { name: 'MySQL', icon: Database },
  ];

  const toolCategories = [
    {
      category: 'SIEM & SOAR',
      tools: ['Splunk', 'Wazuh', 'Shuffle SOAR', 'TheHive']
    },
    {
      category: 'Network Analysis',
      tools: ['Wireshark', 'Nmap']
    },
    {
      category: 'Security Testing',
      tools: ['Burp Suite', 'Hydra']
    },
    {
      category: 'Threat Intelligence',
      tools: ['VirusTotal', 'AbuseIPDB']
    },
    {
      category: 'Platforms & Virtualization',
      tools: ['Kali Linux', 'Ubuntu', 'Windows', 'VirtualBox', 'VMware']
    },
    {
      category: 'Scripting & Automation',
      tools: ['Bash']
    }
  ];

  return (
    <div className="p-10 text-white font-mono relative">
      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
        }}
      />

      <div className="space-y-12 relative z-10">

        {/* Cybersecurity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header with glitch */}
          <motion.h3
            className="text-3xl font-bold mb-6 tracking-tight relative"
            animate={{
              textShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 10px rgba(255,255,255,0.3)',
                '0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 6,
            }}
          >
            <span className="relative z-10">&gt; CYBERSECURITY</span>
            <motion.span
              className="absolute inset-0 text-white opacity-30"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 6,
              }}
            >
              &gt; CYBERSECURITY
            </motion.span>
            
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.h3>

          <div className="grid grid-cols-2 gap-5">
            {cyberSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center p-5 rounded-lg bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm relative overflow-hidden group"
                >
                  {/* Hover sweep */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '100%',
                      opacity: [0, 0.05, 0.05, 0],
                      transition: { duration: 0.5 }
                    }}
                  />

                  {/* Glitch on hover */}
                  <motion.div
                    className="absolute inset-0 border border-white/0"
                    whileHover={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                    animate={{
                      opacity: [0, 0, 0.5, 0, 0],
                      x: [0, -1, 1, 0],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 8,
                    }}
                  />

                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/30 flex items-center justify-center mb-3 relative z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs text-center leading-snug relative z-10">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* MERN Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6 tracking-tight relative"
            animate={{
              textShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 10px rgba(255,255,255,0.3)',
                '0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 6,
              delay: 0.5,
            }}
          >
            <span className="relative z-10">&gt; DEVELOPMENT</span>
            <motion.span
              className="absolute inset-0 text-white opacity-30"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 6,
                delay: 0.5,
              }}
            >
              &gt; DEVELOPMENT
            </motion.span>
            
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.h3>

          <div className="grid grid-cols-3 gap-5">
            {mernSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center p-5 rounded-lg bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '100%',
                      opacity: [0, 0.05, 0.05, 0],
                      transition: { duration: 0.5 }
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 border border-white/0"
                    whileHover={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                    animate={{
                      opacity: [0, 0, 0.5, 0, 0],
                      x: [0, -1, 1, 0],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 8,
                    }}
                  />

                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/30 flex items-center justify-center mb-3 relative z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs text-center leading-snug relative z-10">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tools & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h4
            className="text-2xl font-bold mb-5 tracking-tight relative"
            animate={{
              textShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 10px rgba(255,255,255,0.3)',
                '0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 6,
              delay: 1,
            }}
          >
            <span className="relative z-10">&gt; TOOLS & TECHNOLOGIES</span>
            <motion.span
              className="absolute inset-0 text-white opacity-30"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 6,
                delay: 1,
              }}
            >
              &gt; TOOLS & TECHNOLOGIES
            </motion.span>
            
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </motion.h4>

          <div className="space-y-6">
            {toolCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + 0.1 * catIndex }}
              >
                <h5 className="text-sm font-semibold text-white/70 mb-3 tracking-wide">
                  {category.category}
                </h5>
                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + catIndex * 0.1 + 0.03 * index }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white text-sm hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        whileHover={{
                          x: '100%',
                          opacity: [0, 0.05, 0.05, 0],
                          transition: { duration: 0.4 }
                        }}
                      />
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}