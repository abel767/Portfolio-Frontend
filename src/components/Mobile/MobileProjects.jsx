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
        "Deployed Snort IDS on Ubuntu and integrated it with Splunk Enterprise using Universal Forwarder to detect port scans and SSH brute-force attempts in real-time.",
      tags: [
        "Snort IDS",
        "Splunk",
        "Universal Forwarder",
        "Linux",
        "Network Security",
        "SPL",
        "IDS",
      ],
      githubLink: "https://github.com/abel767/Snort-Splunk-IDS-Integration-Project",
      demoLink: "",
    },
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
    <section id="projects" ref={ref} className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] mb-6 font-mono">
            Projects
          </div>
          <h2 className="text-white mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            A selection of projects showcasing my expertise in SOC automation and cybersecurity
            pipelines.
          </p>
        </motion.div>

        {/* MAIN PROJECTS */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-white/[0.02] border border-white/10 hover:border-[#00ffff]/30 transition-all duration-300 rounded-2xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <h3 className="text-white group-hover:text-[#00ffff] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/[0.05] border border-white/10 text-white/70 font-mono"
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
                      className="flex items-center gap-2 text-white/70 hover:text-[#00ffff] transition-colors font-mono"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-[#00ffff] transition-colors font-mono"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/0 via-[#00ffff]/0 to-[#00ffff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.article>
          ))}

          {/* EXTRA PROJECTS (show when clicked) */}
          {showMore &&
            moreProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 bg-white/[0.02] border border-white/10 hover:border-[#00ffff]/30 transition-all duration-300 rounded-2xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    <h3 className="text-white group-hover:text-[#00ffff] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/[0.05] border border-white/10 text-white/70 font-mono"
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
                        className="flex items-center gap-2 text-white/70 hover:text-[#00ffff] transition-colors font-mono"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/0 via-[#00ffff]/0 to-[#00ffff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.article>
            ))}
        </div>

        {/* SHOW MORE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:border-[#00ffff] hover:text-[#00ffff] transition-colors font-mono"
          >
            <span>{showMore ? "Show less" : "Show more"}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
