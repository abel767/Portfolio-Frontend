import { useRef } from "react";
import { motion, useInView } from "motion/react";
import me from "../../assets/me.png";

export function MobileAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    
    <section id="about" ref={ref} className="min-h-screen bg-black py-20 px-6 text-white relative overflow-hidden">
      
      {/* Glow & Background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-cyan-500/20 -translate-x-1/2 -translate-y-1/2 filter blur-3xl"
      />
      
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        
        {/* Profile Image */}
        <motion.img
          src={me}
          alt="Abel"
          className="w-32 h-32 rounded-2xl object-cover mx-auto mb-6 shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-white/10"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] mb-4 font-mono">
            About
          </div>
          <h2 className="text-3xl font-semibold mb-4">Hi, I'm Abel Thomas</h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            I’m a cybersecurity enthusiast and recent CICSA graduate, passionate about protecting systems,
            analyzing threats, and building secure workflows.  
            With a MERN development background, I understand applications inside out, making me ready for any
            cybersecurity challenge.  
            Open to SOC, pentesting, automation, and security projects, eager to learn and contribute.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 text-center max-w-md mx-auto mt-8"
        >
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded">
            <div className="text-[#00ffff] mb-1">0+</div>
            <div className="text-muted-foreground font-mono text-sm">Years</div>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded">
            <div className="text-[#00ffff] mb-1">10+</div>
            <div className="text-muted-foreground font-mono text-sm">Labs & Projects</div>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded">
            <div className="text-[#00ffff] mb-1">100%</div>
            <div className="text-muted-foreground font-mono text-sm">Committed</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
