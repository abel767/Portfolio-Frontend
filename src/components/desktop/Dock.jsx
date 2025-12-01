import { Home, User, Code, Briefcase, Mail, Terminal, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function Dock({ onIconClick, openWindows }) {
  const dockItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
    { id: 'terminal', icon: Terminal, label: 'Terminal' },
    { id: 'files', icon: FolderOpen, label: 'Files' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-2 lg:pb-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        className="relative"
      >
        {/* Dock container with glitch effect - responsive sizing */}
        <motion.div
          className="bg-black/80 backdrop-blur-xl border-2 border-white/20 rounded-xl lg:rounded-2xl px-3 lg:px-6 py-2 lg:py-3 shadow-2xl relative overflow-hidden"
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 255, 255, 0.1)',
              '0 0 30px rgba(255, 255, 255, 0.2)',
              '0 0 20px rgba(255, 255, 255, 0.1)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          {/* Subtle glitch line */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              opacity: [0, 0, 0.1, 0, 0],
              scaleY: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 8,
            }}
          />

          <div className="flex items-center gap-2 lg:gap-3 relative z-10">
            {dockItems.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openWindows.includes(item.id);

              return (
                <motion.button
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  onClick={() => onIconClick(item.id)}
                  className="group relative"
                  aria-label={item.label}
                  whileHover={{ scale: 1.1, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glitch effect on hover */}
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
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  />

                  {/* Icon container - responsive sizing */}
                  <motion.div
                    className={`
                      w-11 h-11 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl flex items-center justify-center
                      transition-all duration-300 ease-out relative overflow-hidden
                      ${
                        isOpen
                          ? 'bg-white/15 border-2 border-white/40'
                          : 'bg-white/5 border-2 border-white/10 group-hover:bg-white/10 group-hover:border-white/30'
                      }
                    `}
                    animate={
                      isOpen
                        ? {
                            borderColor: [
                              'rgba(255, 255, 255, 0.4)',
                              'rgba(255, 255, 255, 0.6)',
                              'rgba(255, 255, 255, 0.4)',
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {/* Sweep effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{
                        x: '100%',
                        opacity: [0, 0.1, 0.1, 0],
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    />

                    <Icon
                      className={`w-5 h-5 lg:w-7 lg:h-7 transition-colors relative z-10 ${
                        isOpen
                          ? 'text-white'
                          : 'text-white/60 group-hover:text-white'
                      }`}
                    />
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-12 lg:-top-14 left-1/2 -translate-x-1/2 pointer-events-none"
                  >
                    <div className="bg-black/90 backdrop-blur-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg border border-white/30 shadow-xl">
                      <span className="text-white text-xs whitespace-nowrap font-mono">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/30 rotate-45"></div>
                  </motion.div>

                  {/* Active indicator - responsive sizing */}
                  {isOpen && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-1.5 lg:-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-white shadow-lg"
                      style={{
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Decorative corner indicators */}
          <motion.div
            className="absolute top-1 left-2 w-1 h-1 bg-white/40 rounded-full"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-1 right-2 w-1 h-1 bg-white/40 rounded-full"
            animate={{
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}