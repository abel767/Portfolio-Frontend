import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsWindow() {
  const projects = [
    {
      title: 'Automated SOC Triage Pipeline',
      description:
        'End-to-end SOC workflow using Wazuh (detection), Shuffle (SOAR automation), TheHive (case management), and VirusTotal (threat intelligence enrichment).',
      tags: ['Wazuh', 'Shuffle SOAR', 'TheHive', 'VirusTotal', 'Incident Response'],
      githubLink: 'https://github.com/abel767/Automated-SOC-Triage-Pipeline-Wazuh-Shuffle-TheHive-',
      demoLink: '',
    },
    {
      title: 'Snort + Splunk IDS Integration',
      description:
        'Deployed Snort IDS on Ubuntu and integrated it with Splunk Enterprise to detect port scans and SSH brute-force attempts in real-time.',
      tags: ['Snort IDS', 'Splunk', 'Universal Forwarder', 'Linux', 'Network Security', 'SPL', 'IDS'],
      githubLink: 'https://github.com/abel767/Snort-Splunk-IDS-Integration-Project',
      demoLink: '',
    },
    {
      title: 'Splunk Brute-Force Detection SIEM',
      description:
        'SIEM pipeline ingesting Linux authentication logs via Universal Forwarder, featuring a real-time Splunk alert for SSH brute-force detection.',
      tags: ['Splunk', 'SIEM', 'SPL', 'Kali Linux', 'Hydra', 'Log Analysis'],
      githubLink: 'https://github.com/abel767/Splunk-Log-Analysis-Real-Time-Brute-Force-Detection.git',
      demoLink: '',
    },
  ];

  return (
    <div className="p-10 max-h-[600px] overflow-y-auto font-mono relative">
      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative z-10"
      >
        <motion.h2
          className="text-3xl font-bold tracking-tight relative"
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
          <span className="relative z-10 text-white">&gt; FEATURED_PROJECTS</span>
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
            &gt; FEATURED_PROJECTS
          </motion.span>
          
          <motion.div
            className="absolute -bottom-2 left-0 h-0.5 bg-white"
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -5 }}
            className="
              bg-black/60 backdrop-blur-md rounded-lg border-2 border-white/20
              shadow-2xl overflow-hidden transition-all duration-300
              hover:border-white/40 hover:shadow-white/10
              relative group
            "
          >
            {/* Glitch effect on hover */}
            <motion.div
              className="absolute inset-0 border-2 border-white/0"
              whileHover={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              animate={{
                opacity: [0, 0, 0.3, 0, 0],
                x: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 8,
              }}
            />

            {/* Header bar */}
            <div className="h-8 bg-black/80 border-b-2 border-white/20 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
              </div>
              <div className="flex-1 text-center text-white/50 text-xs">PROJECT_{index + 1}</div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <motion.h4
                className="text-white text-lg font-bold tracking-wide relative"
                whileHover={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                }}
              >
                {project.title}
              </motion.h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + 0.05 * tagIndex }}
                    whileHover={{ scale: 1.05 }}
                    className="
                      px-3 py-1 text-xs rounded-md
                      bg-white/5 border border-white/20 text-white
                      hover:bg-white/10 hover:border-white/40 transition-all
                      relative overflow-hidden group
                    "
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
                    <span className="relative z-10">{tag}</span>
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                {/* GitHub */}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    flex items-center justify-center gap-2 flex-1
                    px-4 py-2.5 rounded-md text-sm font-semibold
                    bg-white/10 border-2 border-white/30 text-white
                    hover:bg-white hover:text-black transition-all
                    relative overflow-hidden group
                  "
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '0%',
                      transition: { duration: 0.3 }
                    }}
                  />
                  <Github className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Code</span>
                </motion.a>

                {/* Demo (optional) */}
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center justify-center gap-2 flex-1
                      px-4 py-2.5 rounded-md text-sm font-semibold
                      bg-white text-black border-2 border-white
                      hover:bg-transparent hover:text-white transition-all
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}