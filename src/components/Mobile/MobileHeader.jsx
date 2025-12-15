import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function MobileHeader() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/AbelThomas.pdf";
  link.setAttribute("download", "AbelThomas.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Glitch scanlines */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Random glitch blocks */}
      {[...Array(25)].map((_, i) => {
        const colors = [
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ff00ff",
          "#ffff00",
          "#00ffff",
          "#ffffff",
        ];
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

      {/* Vertical glitch lines */}
      {[...Array(12)].map((_, i) => {
        const colors = [
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ff00ff",
          "#ffff00",
          "#00ffff",
        ];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-0.5 h-full"
            style={{ backgroundColor: randomColor, left: `${(i + 1) * 8}%` }}
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

      {/* RGB split overlay */}
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
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 text-[#00ffff] font-mono tracking-wider text-sm relative"
          >
            <span className="relative z-10">CYBERSECURITY & FULL-STACK DEV</span>
          </motion.div>

          <h1 className="text-white mb-6 tracking-tight text-4xl font-bold relative">
            Abel Thomas
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed"
          >
            Cybersecurity & Web Developer crafting elegant digital experiences
            with clean code and creative solutions
          </motion.p>

          {/* BUTTONS — UPDATED SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-[#00ffff] text-black font-mono hover:bg-[#00ffff]/90 transition-colors rounded relative overflow-hidden group"
            >
              <span className="relative z-10">Get in touch</span>
            </a>

            {/* Download Resume Button */}
            <button
              onClick={downloadResume}
              className="px-6 py-3 border border-white/20 text-white hover:border-[#00ffff] hover:text-[#00ffff] transition-colors font-mono rounded"
            >
              Get My Resume
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#00ffff] transition-colors cursor-pointer"
      >
        <span className="font-mono text-sm">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
