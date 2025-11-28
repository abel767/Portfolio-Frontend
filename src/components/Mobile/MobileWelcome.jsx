import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileWelcome({ onFinish }) {
  const terminalLines = [
    { text: "Initializing secure connection...", delay: 0 },
    { text: "Loading encryption modules...", delay: 400 },
    { text: "Authenticating user credentials...", delay: 800 },
    { text: "Establishing encrypted tunnel...", delay: 1200 },
    { text: "Access granted.", delay: 1800 },
    { text: "Welcome to the portfolio.", delay: 2200 }
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, terminalLines[currentLineIndex].delay);

      return () => clearTimeout(timer);
    } else {
      // After all lines, wait then exit
      const exitTimer = setTimeout(() => {
        setShow(false);
      }, 1000);
      return () => clearTimeout(exitTimer);
    }
  }, [currentLineIndex]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {show && (
        <motion.section
          className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-6 font-mono overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated grid background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)",
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glowing orb effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,255,255,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, x: "-50%", y: "-50%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Corner decorations */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#00ffff]/40"
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#00ffff]/40"
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Terminal window */}
          <motion.div
            className="relative z-10 w-full max-w-2xl bg-black/60 backdrop-blur-sm border border-[#00ffff]/30 rounded-lg p-6 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00ffff]/20">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[#00ffff]/60 text-xs">terminal@abelthomas:~</span>
            </div>

            {/* Terminal content */}
            <div className="space-y-2">
              {displayedLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-[#00ffff] text-sm sm:text-base"
                >
                  <span className="text-[#00ffff]/60 mr-2">›</span>
                  <span className="flex-1">{line.text}</span>
                  {idx === displayedLines.length - 1 && showCursor && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-[#00ffff] ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress indicator */}
            {currentLineIndex < terminalLines.length && (
              <motion.div
                className="mt-6 w-full h-1 bg-[#00ffff]/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-[#00ffff]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentLineIndex + 1) / terminalLines.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            )}
          </motion.div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 20,
                opacity: 0 
              }}
              animate={{ 
                y: -20,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            />
          ))}
        </motion.section>
      )}
    </AnimatePresence>
  );
}