import { User, FolderOpen, Award, FileText } from 'lucide-react';
import { motion } from 'motion/react';

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
      {/* Triangular grid background */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="trianglePattern" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,86.6 0,86.6" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <polygon points="50,0 0,86.6 50,86.6" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              <polygon points="50,0 100,86.6 50,86.6" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trianglePattern)" />
        </svg>
      </div>

      {/* Subtle grid lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)',
        }}
        animate={{
          y: [0, 100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Random glitch lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-white"
          style={{
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0, 0.3, 0, 0],
            scaleX: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: Math.random() * 8 + 5,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 grid gap-6 z-10">
        {desktopIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (item.id === 'resume' && item.downloadUrl) {
                  handleDownload(item);
                } else {
                  onIconClick(item.id);
                }
              }}
              className="group flex flex-col items-center gap-2 relative"
              aria-label={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover glitch effect */}
              <motion.div
                className="absolute inset-0 border border-white/0 rounded-xl"
                whileHover={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                }}
                animate={{
                  opacity: [0, 0, 0.5, 0, 0],
                  x: [0, -2, 2, 0],
                }}
                transition={{
                  opacity: { duration: 0.1, repeat: Infinity, repeatDelay: 6 },
                  x: { duration: 0.1, repeat: Infinity, repeatDelay: 6 }
                }}
              />

              {/* Icon Box */}
              <div
                className="
                  w-16 h-16 rounded-xl backdrop-blur-sm border 
                  flex items-center justify-center transition-all duration-300
                  bg-white/5 border-white/20
                  group-hover:bg-white/10 group-hover:border-white/40
                  relative overflow-hidden
                "
              >
                {/* Glitch sweep on hover */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{
                    x: ['100%', '100%'],
                    opacity: [0, 0.1, 0.1, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut'
                  }}
                />
                <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors relative z-10" />
              </div>

              {/* Label */}
              <span className="text-sm text-white/60 group-hover:text-white transition-colors font-mono">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Corner status indicators */}
      <motion.div
        className="absolute top-8 right-8 text-white/40 text-xs font-mono"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        STATUS: ACTIVE ◣
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 text-white/40 text-xs font-mono"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        ◥ SECURE_MODE
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 text-white/40 text-xs font-mono"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        v2.0 ◤
      </motion.div>
    </div>
  );
}