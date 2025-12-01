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

      {/* INTENSE glitch blocks - MOBILE STYLE */}
      {[...Array(25)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff', '#ffffff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              backgroundColor: randomColor,
              width: Math.random() * 300 + 100,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0, 0.35, 0.25, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scaleX: [1, 0.6, 1.4, 1],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 0.5,
              delay: Math.random() * 2,
            }}
          />
        );
      })}

      {/* Vertical glitch lines - INTENSE */}
      {[...Array(12)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-0.5 h-full"
            style={{
              backgroundColor: randomColor,
              left: `${(i + 1) * 8}%`,
            }}
            animate={{
              opacity: [0, 0, 0.2, 0.15, 0],
              scaleY: [1, 0.4, 1.2, 1],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1,
              delay: Math.random() * 1,
            }}
          />
        );
      })}

      {/* RGB split overlay - STRONGER */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(90deg, transparent 0%, transparent 100%)",
            "linear-gradient(90deg, rgba(255,0,0,0.15) 0%, transparent 50%, rgba(0,255,0,0.15) 100%)",
            "linear-gradient(90deg, transparent 0%, rgba(0,0,255,0.12) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 0%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Scanline effect - MORE VISIBLE */}
      <motion.div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
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

      {/* Floating particles - MORE VISIBLE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff', '#ffffff'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: randomColor,
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                boxShadow: `0 0 10px ${randomColor}`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut'
              }}
            />
          );
        })}
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
              {/* Hover glitch effect - MORE INTENSE */}
              <motion.div
                className="absolute inset-0 border border-white/0 rounded-xl"
                whileHover={{
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                }}
                animate={{
                  opacity: [0, 0, 0.6, 0, 0],
                  x: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />

              {/* Icon Box */}
              <div
                className="
                  w-16 h-16 rounded-xl backdrop-blur-sm border-2
                  flex items-center justify-center transition-all duration-300
                  bg-white/5 border-white/30
                  group-hover:bg-white/15 group-hover:border-white/50
                  relative overflow-hidden
                "
              >
                {/* RGB glitch layers on hover */}
                <motion.div
                  className="absolute inset-0 bg-red-500"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: [0, 0.2, 0, 0],
                    x: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: 2,
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-cyan-500"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: [0, 0, 0.2, 0, 0],
                    x: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: 2,
                    delay: 0.05,
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

      {/* Corner status indicators - WITH GLITCH */}
      <motion.div
        className="absolute top-8 right-8 text-white/40 text-xs font-mono"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          color: ['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.7)', 'rgba(0,255,255,0.6)', 'rgba(255,255,255,0.4)'],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        STATUS: ACTIVE ◣
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-8 text-white/40 text-xs font-mono"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          color: ['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.8)', 'rgba(255,0,0,0.6)', 'rgba(255,255,255,0.5)'],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      >
        ◥ SECURE_MODE
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 right-8 text-white/40 text-xs font-mono"
        animate={{
          opacity: [0.6, 1, 0.6],
          color: ['rgba(255,255,255,0.6)', 'rgba(255,255,255,1)', 'rgba(0,255,0,0.6)', 'rgba(255,255,255,0.6)'],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 2.2,
        }}
      >
        v2.0 ◤
      </motion.div>
    </div>
  );
}