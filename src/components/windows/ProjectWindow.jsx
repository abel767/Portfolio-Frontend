import { ImageWithFallback } from '../figma/ImageWithFallback' ;
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsWindow() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN app with payment integration and real-time inventory.',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjMzMzg3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Security Audit Tool',
      description: 'Web app security scanner with vulnerability detection.',
      image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM0NDg0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'React', 'Security'],
    },
    {
      title: 'Real-Time Chat',
      description: 'Secure messaging platform with end-to-end encryption.',
      image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYzNDYxMjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Socket.io', 'Node.js', 'React'],
    },
    {
      title: 'Task Manager',
      description: 'Collaborative project management with Kanban boards.',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjMzMzg3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['MERN', 'Redux', 'JWT'],
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
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-[#2A2A2A]">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-[#2A2A2A]">
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
