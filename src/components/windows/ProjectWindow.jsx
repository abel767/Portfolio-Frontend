import { ImageWithFallback } from '../figma/ImageWithFallback' ;
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsWindow() {
  const projects = [
    {
      title: 'Automated SOC Triage Pipeline',
      description: 'A full SOC workflow using Wazuh for detection, Shuffle for SOAR automation, TheHive for incident management, and VirusTotal for threat intelligence enrichment.',
      // TEMP IMAGE: Cyber Security
      image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM0NDg0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Wazuh', 'Shuffle SOAR', 'TheHive', 'VirusTotal', 'Incident Response'],

      githubLink: 'YOUR_PROJECT_1_GITHUB_LINK', 
      demoLink: 'YOUR_PROJECT_1_DEMO_LINK',
    },
    {
      title: 'Splunk Brute-Force Detection SIEM',
      description: 'Built a foundational SIEM pipeline to ingest Kali Linux authentication logs (auth.log) via Universal Forwarder and deployed a Real-time Scheduled Alert for SSH brute-force detection.',
      // TEMP IMAGE: Data/Log Analysis
      image: 'https://images.unsplash.com/photo-1551288258-00ab61a99539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2clMjBhbmFseXNpc3xlbnwxfHx8fDE3NjMyOTQ2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Splunk', 'SIEM', 'SPL', 'Kali Linux', 'Hydra', 'Log Analysis'],

      githubLink: 'https://github.com/abel767/Splunk-Log-Analysis-Real-Time-Brute-Force-Detection.git',
      demoLink: 'YOUR_PROJECT_2_DEMO_LINK',
    },

  ];

  return (
    <div className="p-10 max-h-[600px] overflow-y-auto">
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden hover:border-cyan-500/30 transition-colors">
            {/* Project image */}
            <div className="h-40 overflow-hidden bg-black/40">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* Project info */}
            <div className="p-5 space-y-3">
              <h4 className="text-white text-lg">{project.title}</h4>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-2">
                {/* Demo Button */}
                {/* <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-[#2A2A2A]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a> */}
                
                {/* Code Button */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-[#2A2A2A]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}