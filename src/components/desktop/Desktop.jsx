export  function Desktop() {
  return (
    <div 
      className="fixed inset-0 top-5 bottom-0 overflow-hidden"
      style={{
        background: "#000000",
      }}
    >
      {/* Matrix-style grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite',
        }}
      />
      
      {/* Cyber gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 1000px 800px at 15% 20%, rgba(0, 255, 65, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 800px 600px at 85% 80%, rgba(0, 255, 255, 0.10) 0%, transparent 60%),
            radial-gradient(ellipse 900px 700px at 50% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 70%)
          `,
          animation: "cyberShift 20s ease-in-out infinite",
        }}
      />
      
      {/* Scanline effect */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.3) 2px, rgba(0, 255, 65, 0.3) 4px)',
          animation: 'scanline 8s linear infinite',
        }}
      />
      
      {/* Vignette with cyber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 100%),
            radial-gradient(circle at 20% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 30%)
          `,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: i % 3 === 0 ? 'rgba(0, 255, 65, 0.6)' : i % 3 === 1 ? 'rgba(0, 255, 255, 0.6)' : 'rgba(255, 0, 85, 0.6)',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Animation styles */}
      <style>{`
        @keyframes cyberShift {
          0% {
            background:
              radial-gradient(ellipse 1000px 800px at 15% 20%, rgba(0, 255, 65, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 85% 80%, rgba(0, 255, 255, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 70%);
          }
          33% {
            background:
              radial-gradient(ellipse 1000px 800px at 80% 30%, rgba(0, 255, 255, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 20% 70%, rgba(255, 0, 85, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 60%, rgba(0, 255, 65, 0.08) 0%, transparent 70%);
          }
          66% {
            background:
              radial-gradient(ellipse 1000px 800px at 40% 80%, rgba(255, 0, 85, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 70% 20%, rgba(0, 255, 65, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 40%, rgba(0, 255, 255, 0.08) 0%, transparent 70%);
          }
          100% {
            background:
              radial-gradient(ellipse 1000px 800px at 15% 20%, rgba(0, 255, 65, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 800px 600px at 85% 80%, rgba(0, 255, 255, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 900px 700px at 50% 50%, rgba(255, 0, 85, 0.08) 0%, transparent 70%);
          }
        }
        
        @keyframes gridScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
        
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}