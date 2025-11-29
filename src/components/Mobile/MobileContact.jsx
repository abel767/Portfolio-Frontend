import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function MobileContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus({ loading: false, success: false, error: null });
        }, 5000);
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || "Failed to send message",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Network error. Please check server.",
      });
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/abel767", handle: "@abelthomas" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/abel-thomas-60193b27b", handle: "/abel-thomas-60193b27b" },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      
      {/* Scanlines */}
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
      {[...Array(10)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              backgroundColor: randomColor,
              width: Math.random() * 150 + 50,
              height: Math.random() * 3 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0, 0.12, 0.08, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 7 + 5,
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Vertical lines */}
      {[...Array(4)].map((_, i) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px h-full"
            style={{
              backgroundColor: randomColor,
              left: `${(i + 1) * 20}%`,
            }}
            animate={{
              opacity: [0, 0, 0.06, 0, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: Math.random() * 9 + 6,
              delay: Math.random() * 4,
            }}
          />
        );
      })}

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Contact Label */}
          <div className="inline-block px-4 py-2 border border-[#00ffff]/30 text-[#00ffff] mb-6 font-mono text-sm relative">
            <span className="relative z-10">CONTACT</span>
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
              CONTACT
            </motion.span>
          </div>

          {/* Let's Connect with glitch */}
          <h2 className="text-white mb-4 text-3xl font-bold relative">
            <span className="relative z-10">Let's Connect</span>
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
                repeatDelay: 2.5,
              }}
            >
              Let's Connect
            </motion.span>
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
                repeatDelay: 2.5,
                delay: 0.05,
              }}
            >
              Let's Connect
            </motion.span>
            <motion.span
              className="absolute inset-0 text-green-500"
              animate={{
                opacity: [0, 0.6, 0, 0, 0],
                x: [0, 3, -3, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                delay: 0.1,
              }}
            >
              Let's Connect
            </motion.span>
          </h2>

          <p className="text-gray-400">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-12"
        >
          {["name", "email", "message"].map((field) => {
            const isTextarea = field === "message";
            return (
              <div key={field}>
                <label htmlFor={field} className="block mb-2 text-white/90 capitalize font-mono text-sm">
                  {field}
                </label>
                {isTextarea ? (
                  <textarea
                    id={field}
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-[#00ffff]/20 text-white placeholder-gray-500 focus:border-[#00ffff]/60 focus:outline-none transition-all duration-300 resize-none rounded-lg backdrop-blur-sm font-mono"
                  />
                ) : (
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your name" : "your.email@example.com"}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-[#00ffff]/20 text-white placeholder-gray-500 focus:border-[#00ffff]/60 focus:outline-none transition-all duration-300 rounded-lg backdrop-blur-sm font-mono"
                  />
                )}
              </div>
            );
          })}

          {/* Success message */}
          {status.success && (
            <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/40 rounded-lg text-green-400">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-mono text-sm">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {/* Error message */}
          {status.error && (
            <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/40 rounded-lg text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-mono text-sm">{status.error}</span>
            </div>
          )}

          {/* Submit button with glitch */}
          <motion.button
            type="submit"
            disabled={status.loading}
            className="relative w-full px-6 py-4 bg-[#00ffff] text-black font-mono flex items-center justify-center gap-2 disabled:opacity-50 rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(0, 255, 255, 0)",
                "0 0 20px rgba(0, 255, 255, 0.3)",
                "0 0 0 rgba(0, 255, 255, 0)"
              ]
            }}
            transition={{
              boxShadow: { duration: 0.2, repeat: Infinity, repeatDelay: 2 }
            }}
          >
            {/* Button glitch layers */}
            <motion.span
              className="absolute inset-0 bg-red-500"
              animate={{
                x: ["-100%", "-100%", "0%", "100%", "100%"],
                opacity: [0, 0, 0.15, 0.15, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <motion.span
              className="absolute inset-0 bg-green-500"
              animate={{
                x: ["100%", "100%", "0%", "-100%", "-100%"],
                opacity: [0, 0, 0.15, 0.15, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.05,
              }}
            />

            {status.loading ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin relative z-10" />
                <span className="relative z-10">Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Send Message</span>
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative my-12"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#00ffff]/20" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-black text-gray-500 font-mono text-sm">or reach out via</span>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <motion.a
            href="mailto:abelthomas.pro@gmail.com"
            className="group flex items-center gap-4 p-4 bg-black/40 border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300 rounded-lg backdrop-blur-sm"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="p-3 bg-[#00ffff]/10 border border-[#00ffff]/30 rounded-lg">
              <Mail className="w-5 h-5 text-[#00ffff]" />
            </div>
            <div className="flex-1">
              <div className="text-gray-500 font-mono text-xs mb-1">Email</div>
              <div className="text-white group-hover:text-[#00ffff] transition-colors font-mono text-sm">abelthomas.pro@gmail.com</div>
            </div>
          </motion.a>

          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group flex items-center gap-4 p-4 bg-black/40 border border-[#00ffff]/20 hover:border-[#00ffff]/50 transition-all duration-300 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-3 bg-black/60 border border-[#00ffff]/20 group-hover:border-[#00ffff]/40 transition-colors rounded-lg">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00ffff] transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-500 font-mono text-xs mb-1">{link.name}</div>
                  <div className="text-white group-hover:text-[#00ffff] transition-colors font-mono text-sm">{link.handle}</div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}