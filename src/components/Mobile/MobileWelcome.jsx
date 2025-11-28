import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileWelcome({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {show && (
        <motion.section
          className="fixed inset-0 w-full h-screen bg-black flex flex-col items-center justify-center z-[100]"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            x: [0, -5, 5, -3, 3, -2, 2, 0],
            y: [0, 2, -2, 3, -3, 1, -1, 0],
          }}
          transition={{ 
            opacity: { duration: 0.4, delay: 0.3 },
            x: { duration: 0.3, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] },
            y: { duration: 0.3, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }
          }}
          style={{
            textShadow: show ? "0 0 0 transparent" : undefined
          }}
        >
          {/* Glitch overlay on exit */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            exit={{
              opacity: [0, 0, 1, 0, 1, 0, 1, 0],
              background: [
                "linear-gradient(90deg, transparent 0%, transparent 100%)",
                "linear-gradient(90deg, rgba(255,0,0,0.3) 0%, transparent 50%, rgba(0,255,0,0.3) 100%)",
                "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)",
                "linear-gradient(90deg, rgba(0,255,0,0.3) 0%, transparent 50%, rgba(255,0,0,0.3) 100%)",
                "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.2) 50%, transparent 100%)",
                "linear-gradient(90deg, transparent 0%, transparent 100%)",
              ]
            }}
            transition={{ duration: 0.3, times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1] }}
          />
        
          {/* Subtle grid background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.03, 0.03, 0] }}
            transition={{ duration: 2.8, times: [0, 0.3, 0.7, 1] }}
            style={{
              backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)",
              backgroundSize: '50px 50px',
            }}
          />

          {/* Main animation */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram logo */}
            <motion.div
              className="relative w-20 h-20 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 border-2 border-[#00ffff]/30 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
              
              {/* Inner content - AT monogram with glitch */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-[#00ffff] text-2xl font-bold font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.span
                  animate={{
                    x: [0, -2, 2, -1, 1, 0],
                    y: [0, 1, -1, 2, -2, 0],
                    textShadow: [
                      "0 0 0 rgba(0, 255, 255, 0)",
                      "-2px 0 0 rgba(255, 0, 0, 0.7), 2px 0 0 rgba(0, 255, 0, 0.7)",
                      "2px 0 0 rgba(255, 0, 0, 0.7), -2px 0 0 rgba(0, 255, 0, 0.7)",
                      "0 0 0 rgba(0, 255, 255, 0)",
                      "-1px 0 0 rgba(255, 0, 0, 0.5), 1px 0 0 rgba(0, 255, 0, 0.5)",
                      "0 0 0 rgba(0, 255, 255, 0)"
                    ]
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 1.5,
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    ease: "easeInOut"
                  }}
                >
                  AT
                </motion.span>
              </motion.div>

              {/* Animated arc */}
              <motion.svg
                className="absolute inset-0 w-full h-full -rotate-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.circle
                  cx="40"
                  cy="40"
                  r="38"
                  stroke="#00ffff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                />
              </motion.svg>
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-[#00ffff]/60 font-mono text-xs tracking-widest mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.8, times: [0, 0.3, 0.7, 1] }}
            >
              LOADING
            </motion.p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}