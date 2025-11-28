// src/components/Mobile/MobileHeader.jsx
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function MobileHeader() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-visible">
      
      {/* Grid background */}
     <div className="absolute inset-0 opacity-[0.05] sm:opacity-[0.02]">
  <div
    className="h-full"
    style={{
      backgroundImage:
        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
      backgroundSize: window.innerWidth < 768 ? "30px 30px" : "60px 60px", // smaller for mobile
    }}
  />
</div>

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
            className="mb-4 text-[#00ffff] font-mono tracking-wider"
          >
            CYBERSECURITY & FULL-STACK DEV
          </motion.div>

          <h1 className="text-white mb-6 tracking-tight text-4xl font-bold">
            Abel Thomas
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed"
          >
            Cybersecurity & Web Developer crafting elegant digital experiences
            with clean code and creative solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-[#00ffff] text-black font-mono hover:bg-[#00ffff]/90 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-white/20 text-white hover:border-[#00ffff] hover:text-[#00ffff] transition-colors font-mono"
            >
              View work
            </a>
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
        <span className="font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-0 right-0 w-full h-full border-r border-t border-[#00ffff]/20" />
      </div>
    </section>
  );
}
