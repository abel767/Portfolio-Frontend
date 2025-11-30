import { useRef } from "react";
import { motion, useInView } from "motion/react";
import me from "../../assets/me.png";

export function MobileAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="about" ref={ref} className="min-h-screen bg-black py-20 px-6 text-white relative overflow-hidden">
      
      {/* Subtle scanlines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)",
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle glitch blocks - INCREASED */}
      {[...Array(15)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              backgroundColor: randomColor,
              width: Math.random() * 200 + 80,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0, 0.2, 0.15, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 4 + 2,
              delay: Math.random() * 3,
            }}
          />
        );
      })}

      {/* Vertical lines - more visible */}
      {[...Array(6)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px h-full"
            style={{
              backgroundColor: randomColor,
              left: `${(i + 1) * 15}%`,
            }}
            animate={{
              opacity: [0, 0, 0.12, 0, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 3,
              delay: Math.random() * 2,
            }}
          />
        );
      })}

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Section label with glitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="inline-block px-4 py-2 border border-[#00ffff]/30 text-[#00ffff] font-mono text-sm relative">
            <span className="relative z-10">ABOUT</span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-red-500"
              animate={{
                opacity: [0, 0, 0.6, 0, 0],
                x: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 8,
              }}
            >
              ABOUT
            </motion.span>
          </div>
        </motion.div>

        {/* Profile Image with FULL GLITCH effects - hexagon shape */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
          className="relative w-40 h-40 mx-auto mb-8"
        >
          {/* Hexagon border glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: "linear-gradient(45deg, #00ffff, #ff00ff, #00ffff)",
              padding: "2px"
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="w-full h-full bg-black" style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }} />
          </motion.div>

          {/* Main image */}
          <motion.img
            src={me}
            alt="Abel"
            className="absolute inset-0 w-full h-full object-cover z-10"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              x: [0, -3, 4, -2, 3, -1, 2, 0],
              y: [0, 2, -3, 3, -2, 2, -1, 0],
              filter: [
                "brightness(1) contrast(1.05)",
                "brightness(1.2) contrast(1.3)",
                "brightness(0.8) contrast(1.4)",
                "brightness(1.1) contrast(1.2)",
                "brightness(0.9) contrast(1.1)",
                "brightness(1) contrast(1.05)"
              ]
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.15, 0.3, 0.5, 0.7, 1]
            }}
          />
          
          {/* Red glitch layer - actual image distortion */}
          <motion.img
            src={me}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              opacity: [0, 0, 0.8, 0.6, 0, 0],
              x: [0, -6, 7, -5, 0],
              y: [0, 3, -4, 2, 0],
              scaleX: [1, 0.95, 1.08, 0.98, 1],
              scaleY: [1, 1.05, 0.93, 1.02, 1],
              filter: [
                "brightness(2) contrast(2) saturate(2) hue-rotate(350deg)",
                "brightness(2.5) contrast(2.5) saturate(3) hue-rotate(355deg)",
                "brightness(1.8) contrast(2) saturate(2.5) hue-rotate(345deg)",
                "brightness(2) contrast(2) saturate(2) hue-rotate(350deg)"
              ]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.2, 0.4, 0.7, 0.9, 1]
            }}
          />
          
          {/* Green/Cyan glitch layer */}
          <motion.img
            src={me}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              opacity: [0, 0, 0, 0.7, 0.5, 0, 0],
              x: [0, 6, -7, 5, 0],
              y: [0, -3, 4, -2, 0],
              scaleX: [1, 1.05, 0.92, 1.03, 1],
              scaleY: [1, 0.95, 1.08, 0.97, 1],
              filter: [
                "brightness(2) contrast(2) saturate(2) hue-rotate(130deg)",
                "brightness(2.5) contrast(2.5) saturate(3) hue-rotate(140deg)",
                "brightness(1.8) contrast(2) saturate(2.5) hue-rotate(120deg)",
                "brightness(2) contrast(2) saturate(2) hue-rotate(130deg)"
              ]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2.5,
              delay: 0.07,
              times: [0, 0.2, 0.4, 0.7, 0.9, 1]
            }}
          />
          
          {/* Blue/Purple glitch layer */}
          <motion.img
            src={me}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              opacity: [0, 0.6, 0, 0, 0.5, 0, 0],
              x: [0, 4, -5, 6, 0],
              y: [0, -4, 3, -3, 0],
              scaleX: [1, 0.98, 1.06, 0.95, 1],
              filter: [
                "brightness(2) contrast(2) saturate(2) hue-rotate(220deg)",
                "brightness(2.5) contrast(2.5) saturate(3) hue-rotate(230deg)",
                "brightness(1.8) contrast(2) saturate(2.5) hue-rotate(210deg)",
                "brightness(2) contrast(2) saturate(2) hue-rotate(220deg)"
              ]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2.5,
              delay: 0.14,
              times: [0, 0.2, 0.4, 0.7, 0.9, 1]
            }}
          />

          {/* Scanline effect over image */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)",
            }}
            animate={{
              opacity: [0, 0, 0.5, 0, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
          />
        </motion.div>

        {/* Title - NO GLITCH */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          Hi, I'm Abel Thomas
        </motion.h2>

        {/* Description - NO GLITCH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-center mb-12 leading-relaxed max-w-xl mx-auto"
        >
          I'm a cybersecurity enthusiast and recent CICSA graduate, passionate about protecting systems,
          analyzing threats, and building secure workflows. With a MERN development background, I understand 
          applications inside out, making me ready for any cybersecurity challenge. Open to SOC, pentesting, 
          automation, and security projects, eager to learn and contribute.
        </motion.p>

        {/* Medium Link */}
<motion.a
  href="https://medium.com/@YOUR_MEDIUM_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.45 }}
  className="block w-max mx-auto mb-12 px-6 py-2 border border-[#00ffff]/40 text-[#00ffff] font-mono text-sm 
             hover:border-[#00ffff] hover:text-black hover:bg-[#00ffff] transition-all relative overflow-hidden"
>
  <span className="relative z-10">Read My Medium Articles</span>

  {/* Glitch layer */}
  <motion.span
    className="absolute inset-0 bg-[#00ffff]"
    style={{ opacity: 0 }}
    animate={{
      opacity: [0, 0, 0.4, 0, 0],
      x: [0, -3, 3, 0],
    }}
    transition={{
      duration: 0.12,
      repeat: Infinity,
      repeatDelay: 8,
    }}
  />
</motion.a>


        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[
            { value: "0+", label: "Years" },
            { value: "3+", label: "Labs & Projects" },
            { value: "100%", label: "Committed" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative p-4 border border-[#00ffff]/20 bg-black/40 backdrop-blur-sm text-center group hover:border-[#00ffff]/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Stat glitch effect on hover */}
              <motion.div
                className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/30"
                animate={{
                  opacity: [0, 0, 0.5, 0, 0],
                  x: [0, -1, 1, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              />
              
              <div className="text-2xl font-bold text-[#00ffff] mb-1 font-mono relative">
                <span className="relative z-10">{stat.value}</span>
              </div>
              <div className="text-gray-500 text-sm font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative corner accents */}
        <div className="absolute top-8 left-0 w-24 h-24 border-l border-t border-[#00ffff]/10 pointer-events-none" />
        <div className="absolute bottom-8 right-0 w-24 h-24 border-r border-b border-[#00ffff]/10 pointer-events-none" />
      </div>
    </section>
  );
}