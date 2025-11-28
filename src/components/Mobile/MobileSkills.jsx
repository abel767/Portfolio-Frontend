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
        'Kali Linux', 'Metasploit', 'MSFvenom', 'Burp Suite', 'BeeF',
        'Docker', 'Linux', 'Git', 'REST APIs', 'Shuffle SOAR', 'TheHive', 'VirusTotal API'
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/40 text-accent mb-6 font-mono">
            Skills
          </div>

          <h2 className="text-foreground mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">
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
              <h3 className="text-foreground mb-6 pb-2 border-b border-white/10">
                {category.category}
              </h3>

              {/* For Cybersecurity + MERN */}
              {category.category !== "Tools & Technologies" ? (
                <div className="grid grid-cols-2 gap-5">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: catIndex * 0.15 + skillIndex * 0.05,
                        }}
                        className="rounded-2xl p-5 bg-card border border-border hover:bg-muted transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>

                        <span className="text-foreground text-xs">{skill.name}</span>
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
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.15 + idx * 0.05,
                      }}
                      className="px-4 py-2 rounded-lg text-sm bg-muted text-foreground border border-border hover:bg-accent/10 transition-all"
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
