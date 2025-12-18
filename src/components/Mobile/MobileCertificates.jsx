import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { FileText, Download, Award, CheckCircle } from "lucide-react";

export function MobileCertificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [downloading, setDownloading] = useState(null);

  const certificates = [
    {
      name: 'CSA Certification',
      title: 'certified Cyber Security Analyst',
      organization: 'RedTeam360',
      date: 'January 2024',
      size: '89 KB',
      downloadUrl: '/certificate.pdf',
    },
    {
      name: 'Ethical Hacking',
      title: 'Learn Ethical Hacking from Scratch',
      organization: 'Udemy - Zaid Sabih',
      date: '2024',
      size: '99 KB',
      downloadUrl: '/Udemy-Ethical-Hacking.pdf',
    }
  ];

  const handleDownload = (cert) => {
    setDownloading(cert.name);
    
    const link = document.createElement('a');
    link.href = cert.downloadUrl;
    link.download = `${cert.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(null), 2000);
  };

  return (
    <section 
      id="certificates" 
      ref={ref} 
      className="min-h-screen bg-black py-20 px-6 relative overflow-hidden"
    >
      
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

      {/* Glitch blocks */}
      {[...Array(12)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              backgroundColor: randomColor,
              width: Math.random() * 180 + 70,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0, 0.18, 0.12, 0],
              x: [0, Math.random() * 25 - 12, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 3,
              delay: Math.random() * 4,
            }}
          />
        );
      })}

      {/* Vertical lines */}
      {[...Array(5)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px h-full"
            style={{
              backgroundColor: randomColor,
              left: `${(i + 1) * 18}%`,
            }}
            animate={{
              opacity: [0, 0, 0.1, 0, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: Math.random() * 6 + 4,
              delay: Math.random() * 3,
            }}
          />
        );
      })}

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Certificates Label with glitch */}
          <div className="inline-block px-4 py-2 border border-[#00ffff]/30 text-[#00ffff] mb-4 font-mono text-sm relative">
            <span className="relative z-10">CERTIFICATES & DOCUMENTS</span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-red-500"
              animate={{
                opacity: [0, 0, 0.6, 0, 0],
                x: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 9,
              }}
            >
              CERTIFICATES & DOCUMENTS
            </motion.span>
          </div>

          <h2 className="text-white mb-4 text-3xl font-bold relative">
            <span className="relative z-10">Professional Credentials</span>
            {/* Red glitch */}
            <motion.span
              className="absolute inset-0 text-red-500"
              animate={{
                opacity: [0, 0, 0.8, 0, 0],
                x: [0, -4, 5, 0],
                y: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              Professional Credentials
            </motion.span>
            {/* Cyan glitch */}
            <motion.span
              className="absolute inset-0 text-[#00ffff]"
              animate={{
                opacity: [0, 0, 0, 0.7, 0, 0],
                x: [0, 5, -4, 0],
                y: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.05,
              }}
            >
              Professional Credentials
            </motion.span>
            {/* Green glitch */}
            <motion.span
              className="absolute inset-0 text-green-500"
              animate={{
                opacity: [0, 0.6, 0, 0, 0],
                x: [0, 3, -3, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.1,
              }}
            >
              Professional Credentials
            </motion.span>
          </h2>
          <p className="text-gray-400">
            Certifications and documents showcasing my expertise.
          </p>
        </motion.div>

        {/* Certificates List */}
        <div className="space-y-6">
          {certificates.map((cert, index) => {
            const isDownloading = downloading === cert.name;
            
            return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glitch effect on hover */}
                <motion.div
                  className="absolute inset-0 border border-red-500/0 rounded-lg"
                  whileHover={{
                    borderColor: "rgba(255, 0, 0, 0.3)",
                  }}
                  animate={{
                    opacity: [0, 0, 0.5, 0, 0],
                    x: [0, -2, 2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.1, repeat: Infinity, repeatDelay: 8 },
                    x: { duration: 0.1, repeat: Infinity, repeatDelay: 8 }
                  }}
                />

                <div className="relative p-6 bg-black/40 border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300 rounded-lg backdrop-blur-sm">
                  <div className="flex gap-4">
                    
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-[#00ffff]/10 border border-[#00ffff]/30 flex items-center justify-center relative overflow-hidden">
                        {/* Glitch background */}
                        <motion.div
                          className="absolute inset-0 bg-red-500"
                          animate={{
                            opacity: [0, 0, 0.2, 0, 0],
                          }}
                          transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 6,
                          }}
                        />
                        <FileText className="w-7 h-7 text-[#00ffff] relative z-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      
                      {/* Title with glitch */}
                      <h3 className="text-[#00ffff] font-semibold text-lg relative">
                        <span className="relative z-10">{cert.name}</span>
                        <motion.span
                          className="absolute inset-0 text-white"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 0.1 }}
                        >
                          {cert.name}
                        </motion.span>
                      </h3>

                      {/* Subtitle */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {cert.title}
                      </p>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          {cert.organization}
                        </span>
                        <span>•</span>
                        <span>{cert.date}</span>
                        <span>•</span>
                        <span>PDF • {cert.size}</span>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        onClick={() => handleDownload(cert)}
                        disabled={isDownloading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative inline-flex items-center gap-2 px-4 py-2 border border-[#00ffff]/30 text-[#00ffff] hover:border-[#00ffff]/60 hover:bg-[#00ffff]/5 transition-all duration-200 rounded font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                      >
                        {/* Button glitch effect */}
                        <motion.div
                          className="absolute inset-0 bg-[#00ffff]"
                          animate={{
                            opacity: [0, 0, 0.1, 0, 0],
                          }}
                          transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 5,
                          }}
                        />
                        
                        {isDownloading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Download className="w-4 h-4" />
                            </motion.div>
                            <span className="relative z-10">Downloading...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Download PDF</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 relative"
        >
          {/* Glitch border */}
          <motion.div
            className="absolute inset-0 border-2 border-green-500/0 rounded-lg"
            animate={{
              borderColor: [
                "rgba(0, 255, 0, 0)",
                "rgba(0, 255, 0, 0)",
                "rgba(0, 255, 0, 0.3)",
                "rgba(0, 255, 0, 0)",
              ],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 7,
            }}
          />

          <div className="relative p-5 bg-black/40 border border-green-500/20 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium mb-1 font-mono">
                  VERIFIED CREDENTIALS
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  All certificates are authentic and can be verified through the issuing organizations. 
                  Contact me for verification details.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}