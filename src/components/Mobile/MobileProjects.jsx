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
    <section id="projects" ref={ref} className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 bg-accent text-accent-foreground border border-border mb-6 font-mono rounded-md">
            Projects
          </div>

          <h2 className="text-foreground mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            A selection of cybersecurity and automation projects that I’ve built.
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
              <div className="
                relative p-6 
                bg-card 
                border border-border 
                hover:border-accent 
                transition-all duration-300 
                rounded-2xl
              ">
                <div className="space-y-4">

                  {/* Title */}
                  <h3 className="text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="
                          px-2 py-1 
                          bg-muted 
                          text-muted-foreground 
                          border border-border 
                          rounded
                          font-mono
                          text-xs
                        "
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
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors font-mono"
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
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 bg-card border border-border hover:border-accent transition-all duration-300 rounded-2xl">
                  <div className="space-y-4">
                    <h3 className="text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted border border-border text-muted-foreground rounded font-mono text-xs"
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
                        className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors font-mono"
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

        {/* SHOW MORE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              inline-flex items-center gap-2 px-6 py-3 
              border border-border 
              text-foreground 
              hover:border-accent hover:text-accent 
              transition-colors font-mono rounded-md
            "
          >
            <span>{showMore ? "Show less" : "Show more"}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
