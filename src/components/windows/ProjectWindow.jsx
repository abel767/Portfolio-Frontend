import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsWindow() {
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
    <div className="p-10 max-h-[600px] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white/5 backdrop-blur-md rounded-2xl border border-white/10
              shadow-lg overflow-hidden transition-all duration-300
              hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:-translate-y-1
            "
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Info */}
            <div className="p-6 space-y-4">
              <h4 className="text-white text-xl font-semibold tracking-wide">
                {project.title}
              </h4>

              <p className="text-white/60 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1 text-xs rounded-lg tracking-wide
                      bg-cyan-500/10 border border-cyan-500/20 text-cyan-300
                      shadow-sm hover:bg-cyan-500/20 transition-colors
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                {/* GitHub */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2 flex-1
                    px-4 py-2 rounded-lg text-sm
                    bg-white/5 border border-white/10 text-white
                    hover:bg-white/10 hover:border-cyan-500/40 transition-all
                  "
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>

                {/* Demo (optional) */}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center gap-2 flex-1
                      px-4 py-2 rounded-lg text-sm
                      bg-cyan-500/10 text-cyan-300 border border-cyan-500/20
                      hover:bg-cyan-500/20 transition-all
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
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
