import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WelcomeScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowContent(true), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      onFinish();
    }, 800);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && showContent && !isExiting) {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showContent, isExiting]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: "brightness(0) contrast(2)"
          }}
          transition={{ exit: { duration: 0.8 } }}
          className="fixed inset-0 w-screen h-screen bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Triangular grid background */}
          <div className="absolute inset-0 opacity-20">
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

          {/* Subtle glitch lines */}
          {[...Array(8)].map((_, i) => (
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
                repeatDelay: Math.random() * 5 + 3,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Pixelated Skull */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12 relative"
            >
              {/* Pixel art skull - Watch Dogs style */}
              <motion.svg
                width="280"
                height="320"
                viewBox="0 0 28 32"
                className="drop-shadow-2xl"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                    "drop-shadow(0 0 20px rgba(255,255,255,0.5))",
                    "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                {/* Skull pixel art */}
                <g fill="white">
                  {/* Top of skull */}
                  <rect x="10" y="4" width="8" height="2"/>
                  <rect x="8" y="6" width="12" height="2"/>
                  <rect x="7" y="8" width="14" height="2"/>
                  
                  {/* Upper head */}
                  <rect x="6" y="10" width="16" height="2"/>
                  <rect x="5" y="12" width="18" height="2"/>
                  
                  {/* Eyes - hollow */}
                  <rect x="5" y="14" width="18" height="6"/>
                  <rect x="7" y="15" width="4" height="4" fill="black"/>
                  <rect x="17" y="15" width="4" height="4" fill="black"/>
                  
                  {/* Nose */}
                  <rect x="5" y="20" width="18" height="2"/>
                  <rect x="12" y="21" width="4" height="2" fill="black"/>
                  
                  {/* Teeth area */}
                  <rect x="6" y="22" width="16" height="6"/>
                  <rect x="8" y="24" width="2" height="4" fill="black"/>
                  <rect x="11" y="24" width="2" height="4" fill="black"/>
                  <rect x="15" y="24" width="2" height="4" fill="black"/>
                  <rect x="18" y="24" width="2" height="4" fill="black"/>
                  
                  {/* Bottom jaw */}
                  <rect x="8" y="28" width="12" height="2"/>
                  <rect x="10" y="30" width="8" height="2"/>
                </g>
              </motion.svg>

              {/* Glitch effect on skull */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0, 0, 0.4, 0, 0],
                  x: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <svg width="280" height="320" viewBox="0 0 28 32">
                  <g fill="white" opacity="0.5">
                    <rect x="10" y="4" width="8" height="2"/>
                    <rect x="8" y="6" width="12" height="2"/>
                    <rect x="7" y="8" width="14" height="2"/>
                  </g>
                </svg>
              </motion.div>
            </motion.div>

            {/* Loading state */}
            {!showContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-80"
              >
                <motion.div
                  className="text-white text-sm font-mono mb-3 flex items-center gap-2"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ◢
                  </motion.span>
                  Initializing secure connection...
                </motion.div>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-white"
                    style={{ width: `${progress}%` }}
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(255,255,255,0.5)",
                        "0 0 15px rgba(255,255,255,0.8)",
                        "0 0 5px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{
                      boxShadow: { duration: 1, repeat: Infinity }
                    }}
                  />
                </div>
                
                <motion.p
                  className="text-white/60 text-xs mt-2 font-mono text-right"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                >
                  {progress}%
                </motion.p>
              </motion.div>
            )}

            {/* Logged in state */}
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  className="text-white text-2xl font-mono mb-2 relative"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <span className="relative z-10">&gt;Logged in_</span>
                  <motion.span
                    className="absolute inset-0 text-white opacity-50"
                    animate={{
                      x: [0, -3, 3, 0],
                      opacity: [0, 0.5, 0, 0],
                    }}
                    transition={{
                      duration: 0.15,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  >
                    &gt;Logged in_
                  </motion.span>
                </motion.div>

                <motion.p
                  className="text-white/40 text-sm font-mono mb-8"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  Abel Thomas • Portfolio v2.0
                </motion.p>

                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                  onClick={handleFinish}
                  className="relative px-16 py-4 bg-transparent border-2 border-white text-white text-lg font-mono tracking-wider overflow-hidden group hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glitch sweep */}
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ["-100%", "-100%", "100%", "100%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  <span className="relative z-10">[ ENTER SYSTEM ]</span>
                </motion.button>

                <p className="text-white/30 text-xs mt-6 font-mono">
                  Press ENTER to continue
                </p>
              </motion.div>
            )}
          </div>

          {/* Corner details */}
          <motion.div
            className="absolute top-8 left-8 text-white/50 text-xs font-mono"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ◢ SECURE_CONNECTION
          </motion.div>
          <motion.div
            className="absolute top-8 right-8 text-white/50 text-xs font-mono"
            animate={{ opacity: [0.8, 0.5, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ENCRYPTED ◣
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8 text-white/50 text-xs font-mono"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            ◥ STATUS: ACTIVE
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 text-white/50 text-xs font-mono"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            IPv6: ::1 ◤
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}