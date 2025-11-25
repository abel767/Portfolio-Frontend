import { User, FolderOpen, Award, FileText } from 'lucide-react';

export function Desktop({ onIconClick, openWindows }) {
  const desktopIcons = [
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'skills', icon: Award, label: 'Skills' },
    { 
      id: 'resume',
      name: 'Resume.pdf',
      icon: FileText,
      label: 'Resume',
      size: '72 KB',
      downloadUrl: '/AbelThomas.pdf',
    },
  ];

  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 top-5 bottom-0 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Matrix grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite',
        }}
      />

      {/* Cyber gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 1000px 800px at 15% 20%, rgba(0, 255, 65, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 800px 600px at 85% 80%, rgba(0, 255, 255, 0.10) 0%, transparent 60%),
            radial-gradient(ellipse 900px 700px at 50% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 70%)
          `,
          animation: "cyberShift 20s ease-in-out infinite",
        }}
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.3) 2px, rgba(0, 255, 65, 0.3) 4px)',
          animation: 'scanline 8s linear infinite',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 100%),
            radial-gradient(circle at 20% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 30%)
          `,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background:
                i % 3 === 0
                  ? 'rgba(0, 255, 65, 0.6)'
                  : i % 3 === 1
                  ? 'rgba(0, 255, 255, 0.6)'
                  : 'rgba(255, 0, 85, 0.6)',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 grid gap-6 z-10">
        {desktopIcons.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'resume' && item.downloadUrl) {
                  handleDownload(item);
                } else {
                  onIconClick(item.id);
                }
              }}
              className="group flex flex-col items-center gap-2"
              aria-label={item.label}
            >
              {/* Icon Box (hover only, no active glow) */}
              <div
                className="
                  w-12 h-12 rounded-xl backdrop-blur-sm border 
                  flex items-center justify-center transition-all duration-300
                  bg-white/5 border-white/10
                  group-hover:bg-white/10 group-hover:scale-110 group-hover:border-cyan-400/30
                "
              >
                <Icon className="w-8 h-8 text-white/70 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Label */}
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes cyberShift {
          0% {
            background:
              radial-gradient(ellipse 1000px 800px at 15% 20%, rgba(0, 255, 65, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 85% 80%, rgba(0, 255, 255, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 70%);
          }
          33% {
            background:
              radial-gradient(ellipse 1000px 800px at 80% 30%, rgba(0, 255, 255, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 20% 70%, rgba(255, 0, 85, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 60%, rgba(0, 255, 65, 0.08) 0%, transparent 70%);
          }
          66% {
            background:
              radial-gradient(ellipse 1000px 800px at 40% 80%, rgba(255, 0, 85, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 70% 20%, rgba(0, 255, 65, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 40%, rgba(0, 255, 255, 0.08) 0%, transparent 70%);
          }
          100% {
            background:
              radial-gradient(ellipse 1000px 800px at 15% 20%, rgba(0, 255, 65, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 85% 80%, rgba(0, 255, 255, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 70%);
          }
        }

        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(20px, -30px) scale(1.5); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
