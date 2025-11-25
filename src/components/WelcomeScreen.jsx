import { useState, useEffect } from "react";

export function WelcomeScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setStep((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(timer);
        setShowContinue(true);
        return prev;
      });
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      onFinish();
    }, 800);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && showContinue && !isExiting) {
        handleFinish();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showContinue, isExiting]);

  return (
    <div className={`fixed inset-0 w-screen h-screen bg-black flex items-center justify-center overflow-hidden font-mono transition-opacity duration-800 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite'
        }}/>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent h-1 animate-scan"/>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400"/>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400"/>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400"/>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400"/>
      
      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(50px) translateX(50px); }
        }
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .glitch {
          animation: glitch 0.3s infinite;
        }
        .duration-800 {
          transition-duration: 800ms;
        }
      `}</style>

      <div className="relative z-10 max-w-3xl mx-auto px-8">
        <div className="border border-cyan-400/30 bg-black/80 backdrop-blur p-8 shadow-2xl shadow-cyan-500/20">
          {/* Header */}
          <div className="border-b border-cyan-400/30 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"/>
              <div className="w-3 h-3 rounded-full bg-yellow-500"/>
              <div className="w-3 h-3 rounded-full bg-green-500"/>
              <span className="ml-4 text-cyan-400 text-xs">SECURE_TERMINAL_v2.4.1</span>
            </div>
          </div>

          {/* Boot sequence */}
          <div className="space-y-2 text-sm">
            {step >= 1 && (
              <p className="text-cyan-400">
                <span className="text-green-400">[OK]</span> Initializing secure boot sequence...
              </p>
            )}
            {step >= 2 && (
              <p className="text-cyan-400">
                <span className="text-green-400">[OK]</span> Loading security modules... <span className="text-yellow-400">ENCRYPTED</span>
              </p>
            )}
            {step >= 3 && (
              <p className="text-cyan-400">
                <span className="text-green-400">[OK]</span> Firewall status: <span className="text-green-400">ACTIVE</span>
              </p>
            )}
            {step >= 4 && (
              <p className="text-cyan-400">
                <span className="text-green-400">[OK]</span> Authentication protocols: <span className="text-green-400">VERIFIED</span>
              </p>
            )}
            {step >= 5 && (
              <p className="text-cyan-400">
                <span className="text-green-400">[OK]</span> Portfolio environment: <span className="text-green-400">READY</span>
              </p>
            )}
          </div>

          {showContinue && (
            <div className="mt-8 pt-6 border-t border-cyan-400/30">
              <div className="flex items-center justify-between">
                <div className="text-cyan-400 text-sm">
                  <span className="inline-block w-2 h-4 bg-cyan-400 mr-1" style={{ animation: 'blink 1s step-end infinite' }}/>
                  Access granted
                </div>
                <button
                  onClick={handleFinish}
                  className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase text-sm tracking-wider hover:shadow-lg hover:shadow-cyan-400/50"
                >
                  [ ENTER SYSTEM ]
                </button>
              </div>
              <p className="text-xs text-cyan-400/50 mt-4 text-center">Press ENTER or click to continue</p>
            </div>
          )}
        </div>

        {/* Bottom status bar */}
        <div className="mt-4 text-xs text-cyan-400/70 flex justify-between">
          <span>◆ SECURE CONNECTION</span>
          <span>IPv6: ::1 </span>
          <span>UPTIME: {String(step * 342).padStart(4, '0')}ms</span>
        </div>
      </div>
    </div>
  );
}