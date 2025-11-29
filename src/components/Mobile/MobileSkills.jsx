import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Database, Server, Code2, Shield, Lock, FileSearch, Globe, Zap } from 'lucide-react';

export function MobileSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Cybersecurity",
      skills: [
        { name: 'SOC Monitoring', icon: Shield },
        { name: 'Splunk & Snort Integration', icon: FileSearch },
        { name: 'Incident Triage & Log Analysis', icon: Code2 },
        { name: 'Wireshark / Network Analysis', icon: Globe },
        { name: 'Ethical Penetration Testing', icon: Lock },
        { name: 'Automation & SOAR Tools', icon: Zap },
      ],
    },
    {
      category: "MERN Stack",
      skills: [
        { name: 'JavaScript', icon: Code2 },
        { name: 'React', icon: Code2 },
        { name: 'Node.js', icon: Zap },
        { name: 'MongoDB', icon: Database },
        { name: 'Express.js', icon: Server },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        'Kali Linux', 'Metasploit', 'MSFvenom', 'Burp Suite', 'BeeF',
        'Docker', 'Linux', 'Git', 'REST APIs', 'Shuffle SOAR', 'TheHive', 'VirusTotal API'
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      
      {/* Scanlines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)",
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Glitch blocks */}
      {[...Array(10)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              backgroundColor: randomColor,
              width: Math.random() * 160 + 60,
              height: Math.random() * 3 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0, 0.15, 0.1, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 6 + 4,
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Vertical lines */}
      {[...Array(4)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px h-full"
            style={{
              backgroundColor: randomColor,
              left: `${(i + 1) * 20}%`,
            }}
            animate={{
              opacity: [0, 0, 0.08, 0, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: Math.random() * 8 + 5,
              delay: Math.random() * 4,
            }}
          />
        );
      })}

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Skills Label with glitch */}
          <div className="inline-block px-4 py-2 border border-[#00ffff]/30 text-[#00ffff] mb-4 font-mono text-sm relative">
            <span className="relative z-10">SKILLS</span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-red-500"
              animate={{
                opacity: [0, 0, 0.6, 0, 0],
                x: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 8,
              }}
            >
              SKILLS
            </motion.span>
          </div>

          {/* Technical Expertise with glitch */}
          <h2 className="text-white mb-4 text-3xl font-bold relative">
            <span className="relative z-10">Technical Expertise</span>
            <motion.span
              className="absolute inset-0 text-red-500"
              animate={{
                opacity: [0, 0, 0.8, 0, 0],
                x: [0, -4, 5, 0],
                y: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            >
              Technical Expertise
            </motion.span>
            <motion.span
              className="absolute inset-0 text-[#00ffff]"
              animate={{
                opacity: [0, 0, 0, 0.7, 0, 0],
                x: [0, 5, -4, 0],
                y: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                delay: 0.05,
              }}
            >
              Technical Expertise
            </motion.span>
            <motion.span
              className="absolute inset-0 text-green-500"
              animate={{
                opacity: [0, 0.6, 0, 0, 0],
                x: [0, 3, -3, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                delay: 0.1,
              }}
            >
              Technical Expertise
            </motion.span>
          </h2>

          <p className="text-gray-400">
            Hands-on experience across cybersecurity, SOC operations, penetration testing,
            full-stack development, and modern tooling.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              {/* Category title with glitch */}
              <h3 className="text-white mb-6 pb-2 border-b border-[#00ffff]/20 text-xl font-semibold relative inline-block">
                <span className="relative z-10">{category.category}</span>
                <motion.span
                  className="absolute inset-0 text-[#00ffff]"
                  animate={{
                    opacity: [0, 0, 0.6, 0, 0],
                    x: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: catIndex * 0.5,
                  }}
                >
                  {category.category}
                </motion.span>
                <motion.span
                  className="absolute inset-0 text-red-500"
                  animate={{
                    opacity: [0, 0.5, 0, 0, 0],
                    x: [0, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: catIndex * 0.5 + 0.05,
                  }}
                >
                  {category.category}
                </motion.span>
              </h3>

              {category.category !== "Tools & Technologies" ? (
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: catIndex * 0.15 + skillIndex * 0.08,
                        }}
                        whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.6)" }}
                        className="relative rounded-lg p-4 bg-black/40 border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all backdrop-blur-sm group"
                      >
                        {/* Hover glitch effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-red-500/0 group-hover:border-red-500/30"
                          animate={{
                            opacity: [0, 0, 0.3, 0, 0],
                            x: [0, -1, 1, 0],
                          }}
                          transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 6,
                          }}
                        />

                        <div className="w-10 h-10 rounded-lg bg-[#00ffff]/10 border border-[#00ffff]/30 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-[#00ffff]" />
                        </div>
                        <span className="text-white text-sm font-mono">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.15 + idx * 0.05,
                      }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.5)" }}
                      className="px-4 py-2 rounded-md text-sm bg-black/40 text-gray-300 border border-[#00ffff]/20 hover:border-[#00ffff]/50 hover:text-white transition-all font-mono backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}