import { motion } from 'motion/react';
import me from '../../assets/me.png';

export function AboutWindow() {
  return (
    <div className="p-10 text-white font-mono relative">
      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
        }}
      />

      <div className="flex gap-10 items-start relative z-10">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            {/* Hexagon frame */}
            <div
              className="rounded-lg overflow-hidden border-2 border-white/30 shadow-2xl relative"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              }}
            >
              <img
                src={me}
                alt="Abel Thomas"
                className="w-48 h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Glitch overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-white mix-blend-overlay"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: [0, 0.1, 0, 0.15, 0],
                  x: [0, -3, 3, -2, 0],
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </div>

            {/* Corner accents */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/50"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/50"
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Status indicator */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-xs text-white/60"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white shadow-lg" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.8)' }} />
            <span>AVAILABLE FOR WORK</span>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          {/* Header with glitch */}
          <motion.h2
            className="text-4xl font-bold tracking-tight relative mb-8"
            animate={{
              textShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 10px rgba(255,255,255,0.5)',
                '0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          >
            <span className="relative z-10">&gt; ABOUT_ME</span>
            <motion.span
              className="absolute inset-0 text-white opacity-30"
              animate={{
                x: [0, -3, 3, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              &gt; ABOUT_ME
            </motion.span>
            
            {/* Underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>

          <div className="space-y-5 text-gray-300 leading-relaxed text-[15px]">
            {/* Professional summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 p-5 rounded-lg border border-white/20 backdrop-blur-sm relative overflow-hidden group hover:border-white/40 transition-all"
            >
              {/* Hover glitch line */}
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: '-100%' }}
                whileHover={{
                  x: '100%',
                  transition: { duration: 0.5 }
                }}
              />
              
              <p className="relative z-10">
                <span className="text-white font-semibold">Cybersecurity Professional</span> with{' '}
                <span className="text-white">CSA/CICSA certification</span>. Specialized in{' '}
                <span className="text-white">SOC operations, SIEM pipelines, and incident response automation</span>. 
                Built hands-on projects with Wazuh, Splunk, Snort IDS, and SOAR platforms. 
                Strong coding foundation in <span className="text-white">MERN stack</span> for application security insights.
              </p>
            </motion.div>

            {/* Career focus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 p-5 rounded-lg border border-white/20 backdrop-blur-sm relative overflow-hidden group hover:border-white/40 transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: '-100%' }}
                whileHover={{
                  x: '100%',
                  transition: { duration: 0.5 }
                }}
              />
              
              <p className="relative z-10">
                Seeking{' '}
                <span className="text-white">SOC Analyst or Security Engineer roles</span>{' '}
                to build resilient security infrastructures, automate threat detection, 
                and contribute to real-time defense operations.
              </p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-6 border-t border-white/20"
          >
            <h3 className="text-sm text-white/50 font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://github.com/abel767"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all group"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abel-thomas-60193b27b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all group"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://medium.com/@abelthomas946"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all group"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span className="text-white text-sm">Medium</span>
              </motion.a>

              <motion.a
                href="mailto:abelthomas.pro@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all group"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white text-sm">Email</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-3 gap-4 mt-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">CSA/CICSA</div>
              <div className="text-xs text-gray-500">CERTIFIED</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">10+</div>
              <div className="text-xs text-gray-500">LABS & PROJECTS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-gray-500">COMMITTED</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}