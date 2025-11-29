import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export function MobileProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Automated SOC Triage Pipeline",
      description:
        "End-to-end SOC workflow using Wazuh (detection), Shuffle (SOAR automation), TheHive (case management), and VirusTotal (threat intelligence enrichment).",
      tags: ["Wazuh", "Shuffle SOAR", "TheHive", "VirusTotal", "Incident Response"],
      githubLink:
        "https://github.com/abel767/Automated-SOC-Triage-Pipeline-Wazuh-Shuffle-TheHive-",
      demoLink: "",
    },
    {
      title: "Snort + Splunk IDS Integration",
      description:
        "Deployed Snort IDS on Ubuntu and integrated it with Splunk Enterprise to detect port scans and SSH brute-force attempts in real-time.",
      tags: ["Snort IDS", "Splunk", "Universal Forwarder", "Linux", "Network Security", "SPL", "IDS"],
      githubLink: "https://github.com/abel767/Snort-Splunk-IDS-Integration-Project",
      demoLink: "",
    }
  ];

  const moreProjects = [
    {
      title: "Splunk Brute-Force Detection SIEM",
      description:
        "SIEM pipeline ingesting Linux authentication logs via Universal Forwarder, featuring a real-time Splunk alert for SSH brute-force detection.",
      tags: ["Splunk", "SIEM", "SPL", "Kali Linux", "Hydra", "Log Analysis"],
      githubLink:
        "https://github.com/abel767/Splunk-Log-Analysis-Real-Time-Brute-Force-Detection.git",
      demoLink: "",
    },
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      
      {/* Subtle scanlines */}
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
      {[...Array(12)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              backgroundColor: randomColor,
              width: Math.random() * 180 + 70,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0, 0.18, 0.12, 0],
              x: [0, Math.random() * 25 - 12, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 3,
              delay: Math.random() * 4,
            }}
          />
        );
      })}

      {/* Vertical lines */}
      {[...Array(5)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px h-full"
            style={{
              backgroundColor: randomColor,
              left: `${(i + 1) * 18}%`,
            }}
            animate={{
              opacity: [0, 0, 0.1, 0, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: Math.random() * 6 + 4,
              delay: Math.random() * 3,
            }}
          />
        );
      })}

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Projects Label with glitch */}
          <div className="inline-block px-4 py-2 border border-[#00ffff]/30 text-[#00ffff] mb-4 font-mono text-sm relative">
            <span className="relative z-10">PROJECTS</span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-red-500"
              animate={{
                opacity: [0, 0, 0.6, 0, 0],
                x: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 9,
              }}
            >
              PROJECTS
            </motion.span>
          </div>

          <h2 className="text-white mb-4 text-3xl font-bold relative">
            <span className="relative z-10">Featured Work</span>
            {/* Red glitch */}
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
                repeatDelay: 2,
              }}
            >
              Featured Work
            </motion.span>
            {/* Cyan glitch */}
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
                repeatDelay: 2,
                delay: 0.05,
              }}
            >
              Featured Work
            </motion.span>
            {/* Green glitch */}
            <motion.span
              className="absolute inset-0 text-green-500"
              animate={{
                opacity: [0, 0.6, 0, 0, 0],
                x: [0, 3, -3, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.1,
              }}
            >
              Featured Work
            </motion.span>
          </h2>
          <p className="text-gray-400">
            A selection of cybersecurity and automation projects that I've built.
          </p>
        </motion.div>

        {/* MAIN PROJECTS */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Glitch effect on hover */}
              <motion.div
                className="absolute inset-0 border border-red-500/0 rounded-lg"
                whileHover={{
                  borderColor: "rgba(255, 0, 0, 0.3)",
                }}
                animate={{
                  opacity: [0, 0, 0.5, 0, 0],
                  x: [0, -2, 2, 0],
                }}
                transition={{
                  opacity: { duration: 0.1, repeat: Infinity, repeatDelay: 8 },
                  x: { duration: 0.1, repeat: Infinity, repeatDelay: 8 }
                }}
              />

              <div className="relative p-6 bg-black/40 border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300 rounded-lg backdrop-blur-sm">
                <div className="space-y-4">

                  {/* Title with glitch */}
                  <h3 className="text-[#00ffff] font-semibold text-xl relative">
                    <span className="relative z-10">{project.title}</span>
                    <motion.span
                      className="absolute inset-0 text-white"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 0.1 }}
                    >
                      {project.title}
                    </motion.span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/60 text-gray-400 border border-[#00ffff]/20 rounded font-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-[#00ffff] transition-colors font-mono text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* EXTRA PROJECTS */}
          {showMore &&
            moreProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 border border-green-500/0 rounded-lg"
                  whileHover={{
                    borderColor: "rgba(0, 255, 0, 0.3)",
                  }}
                  animate={{
                    opacity: [0, 0, 0.5, 0, 0],
                    x: [0, 2, -2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.1, repeat: Infinity, repeatDelay: 7 },
                    x: { duration: 0.1, repeat: Infinity, repeatDelay: 7 }
                  }}
                />

                <div className="relative p-6 bg-black/40 border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300 rounded-lg backdrop-blur-sm">
                  <div className="space-y-4">
                    <h3 className="text-[#00ffff] font-semibold text-xl relative">
                      <span className="relative z-10">{project.title}</span>
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-black/60 border border-[#00ffff]/20 text-gray-400 rounded font-mono text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-[#00ffff] transition-colors font-mono text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>

        {/* SHOW MORE BUTTON WITH GLITCH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00ffff]/30 text-white font-mono rounded overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              borderColor: [
                "rgba(0, 255, 255, 0.3)",
                "rgba(255, 0, 0, 0.6)",
                "rgba(0, 255, 0, 0.6)",
                "rgba(0, 0, 255, 0.6)",
                "rgba(0, 255, 255, 0.3)"
              ]
            }}
            transition={{
              borderColor: { duration: 0.2, repeat: Infinity, repeatDelay: 1.5 }
            }}
          >
            {/* Button glitch layers - FASTER */}
            <motion.span
              className="absolute inset-0 bg-red-500"
              animate={{
                x: ["-100%", "-100%", "0%", "100%", "100%"],
                opacity: [0, 0, 0.2, 0.2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.span
              className="absolute inset-0 bg-[#00ffff]"
              animate={{
                x: ["100%", "100%", "0%", "-100%", "-100%"],
                opacity: [0, 0, 0.2, 0.2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 0.05,
              }}
            />
            <motion.span
              className="absolute inset-0 bg-green-500"
              animate={{
                x: ["-100%", "-100%", "0%", "100%", "100%"],
                opacity: [0, 0, 0.15, 0.15, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 0.1,
              }}
            />

            {/* Main text */}
            <span className="relative z-10">{showMore ? "Show less" : "Show more"}</span>
            <ExternalLink className="w-4 h-4 relative z-10" />

            {/* Button text glitch - RED */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-2 text-red-500 font-mono"
              animate={{
                opacity: [0, 0, 0.9, 0, 0],
                x: [0, -4, 4, 0],
                y: [0, 1, -1, 0],
              }}
              transition={{
                duration: 0.12,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              <span>{showMore ? "Show less" : "Show more"}</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>

            {/* Green glitch layer */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-2 text-green-500 font-mono"
              animate={{
                opacity: [0, 0, 0, 0.8, 0, 0],
                x: [0, 4, -4, 0],
                y: [0, -1, 1, 0],
              }}
              transition={{
                duration: 0.12,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 0.04,
              }}
            >
              <span>{showMore ? "Show less" : "Show more"}</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>

            {/* Blue glitch layer */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-2 text-blue-500 font-mono"
              animate={{
                opacity: [0, 0.7, 0, 0, 0],
                x: [0, 3, -3, 0],
              }}
              transition={{
                duration: 0.12,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 0.08,
              }}
            >
              <span>{showMore ? "Show less" : "Show more"}</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}