import { motion, useInView } from "motion/react";
import { useRef } from "react";
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
        'Kali Linux', 'Metasploit Framework', 'MSFvenom', 'Burp Suite', 'BeeF', 
        'Docker', 'Linux', 'Git', 'REST APIs', 'Shuffle SOAR', 'TheHive', 'VirusTotal API'
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] mb-6 font-mono">
            Skills
          </div>
          <h2 className="text-white mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">
            Hands-on experience with cybersecurity, development, and essential tools for building secure, modern systems.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <h3 className="text-white mb-6 pb-2 border-b border-white/10">
                {category.category}
              </h3>

              {/* Cybersecurity & MERN */}
              {category.category !== "Tools & Technologies" ? (
                <div className="grid grid-cols-2 gap-5">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: catIndex * 0.15 + skillIndex * 0.05 }}
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
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                /* Tools & Technologies */
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: catIndex * 0.15 + idx * 0.05 }}
                      className="
                        px-4 py-2 rounded-lg text-sm
                        bg-white/5 border border-white/10
                        text-gray-300 backdrop-blur
                        hover:bg-white/10 transition-all
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Highlight Projects / Labs */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-white/[0.02] border border-white/10 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#00ffff] animate-pulse" />
            <div>
              <h4 className="text-white mb-2">Practical Experience</h4>
              <p className="text-muted-foreground text-sm">
                Completed hands-on labs with Splunk, Snort, Wireshark, Burp Suite, and Metasploit.  
                Simulated penetration tests and reverse shell exercises in controlled lab environments, focusing on ethical and educational outcomes.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
