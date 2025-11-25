import { ExternalLink, Github } from 'lucide-react';

export default function MobileProjects() {
  const projects = [
    {
      title: 'Automated SOC Triage Pipeline',
      description:
        'End-to-end SOC workflow using Wazuh (detection), Shuffle (SOAR automation), TheHive (case management), and VirusTotal (threat intelligence enrichment).',
      image:
        'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?auto=format&fit=crop&w=800&q=80',
      tags: ['Wazuh', 'Shuffle SOAR', 'TheHive', 'VirusTotal', 'Incident Response'],
      githubLink: 'YOUR_PROJECT_1_GITHUB_LINK',
      demoLink: '',
    },

    {
      title: 'Splunk Brute-Force Detection SIEM',
      description:
        'SIEM pipeline ingesting Linux authentication logs via Universal Forwarder, featuring a real-time Splunk alert for SSH brute-force detection.',
      image:
        'https://images.unsplash.com/photo-1551288258-00ab61a99539?auto=format&fit=crop&w=800&q=80',
      tags: ['Splunk', 'SIEM', 'SPL', 'Kali Linux', 'Hydra', 'Log Analysis'],
      githubLink:
        'https://github.com/abel767/Splunk-Log-Analysis-Real-Time-Brute-Force-Detection.git',
      demoLink: '',
    },
  ];

  return (
    <div className="px-5 py-10 text-white">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white/5 backdrop-blur-md rounded-2xl border border-white/10
              shadow-lg overflow-hidden transition-all duration-300
            "
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <h4 className="text-xl font-medium">{project.title}</h4>

              <p className="text-white/60 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1 text-xs rounded-lg
                      bg-cyan-500/10 border border-cyan-500/20 text-cyan-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2 flex-1
                    px-4 py-2 rounded-lg text-sm
                    bg-white/5 border border-white/10 text-white
                    hover:bg-white/10
                  "
                >
                  <Github className="w-4 h-4" /> Code
                </a>

                {/* Demo (if exists) */}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center gap-2 flex-1
                      px-4 py-2 rounded-lg text-sm
                      bg-cyan-500/10 text-cyan-300 border border-cyan-500/20
                      hover:bg-cyan-500/20
                    "
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
