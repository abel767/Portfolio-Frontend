import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const MediumIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1043.63 592.71"
    fill="currentColor"
  >
    <path d="M588.67 296.35c0 163.69-131.66 296.35-294.34 296.35S0 460 0 296.35 131.66 0 294.33 0s294.34 132.66 294.34 296.35M826.12 296.35c0 154.78-65.83 280.27-147.02 280.27s-147.03-125.49-147.03-280.27S597.9 16.08 679.1 16.08s147.02 125.49 147.02 280.27M1043.63 296.35c0 144.42-23.49 261.53-52.48 261.53s-52.48-117.11-52.48-261.53S962.16 34.82 991.15 34.82s52.48 117.11 52.48 261.53"/>
  </svg>
);




export  function MobileContact() {
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

  const [focusedField, setFocusedField] = useState(null);

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/abel767", handle: "@abel767" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/abel-thomas-60193b27b", handle: "abel-thomas-60193b27b" },
    { name: "Medium", icon: MediumIcon, url: "https://medium.com/@abelthomas946", handle: "@abelthomas946" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatus({ loading: false, success: false, error: null }), 4000);
      } else {
        setStatus({ loading: false, success: false, error: data.message || "Failed to send message" });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Network error. Please check if the server is running.",
      });
    }
  };

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] mb-6 font-mono">
            Contact
          </div>
          <h2 className="text-white mb-4 text-3xl font-semibold">Let's Connect</h2>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? Reach out, I usually respond within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-12"
        >
          {["name", "email", "message"].map((field) => {
            const isTextarea = field === "message";
            const Icon = field === "name" ? null : field === "email" ? Mail : null;
            return (
              <div key={field}>
                <label htmlFor={field} className="block mb-2 text-white/90 capitalize">{field}</label>
                {isTextarea ? (
                  <textarea
                    id={field}
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData[field]}
                    disabled={status.loading}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-white/[0.02] border text-white placeholder-white/30 focus:outline-none transition-all duration-300 resize-none"
                    style={{ borderColor: focusedField === field ? "#00ffff" : "rgba(255,255,255,0.1)" }}
                  />
                ) : (
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your name" : "your.email@example.com"}
                    value={formData[field]}
                    disabled={status.loading}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-white/[0.02] border text-white placeholder-white/30 focus:outline-none transition-all duration-300"
                    style={{ borderColor: focusedField === field ? "#00ffff" : "rgba(255,255,255,0.1)" }}
                  />
                )}
              </div>
            );
          })}

          {/* Status messages */}
          {status.success && (
            <div className="flex items-center gap-2 p-3 bg-green-600/20 border border-green-600/40 text-green-400 rounded-lg text-sm">
              <CheckCircle className="w-5 h-5" /> Message sent successfully!
            </div>
          )}
          {status.error && (
            <div className="flex items-center gap-2 p-3 bg-red-600/20 border border-red-600/40 text-red-400 rounded-lg text-sm">
              <AlertCircle className="w-5 h-5" /> {status.error}
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full px-6 py-4 bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors font-mono flex items-center justify-center gap-2"
          >
            {status.loading ? "Sending..." : <>
              <Send className="w-5 h-5" /> Send Message
            </>}
          </button>
        </motion.form>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative my-12"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-black text-muted-foreground font-mono">or reach out via</span>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          {/* Email */}
          <a
            href="mailto:abel.thomas@email.com"
            className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 hover:border-[#00ffff]/30 transition-all duration-300"
          >
            <div className="p-3 bg-[#00ffff]/10 border border-[#00ffff]/20">
              <Mail className="w-5 h-5 text-[#00ffff]" />
            </div>
            <div className="flex-1">
              <div className="text-white/70 font-mono mb-1">Email</div>
              <div className="text-white group-hover:text-[#00ffff] transition-colors">
                abel.thomas@email.com
              </div>
            </div>
          </a>

          {/* Social */}
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 hover:border-[#00ffff]/30 transition-all duration-300"
              >
                <div className="p-3 bg-white/[0.05] border border-white/10 group-hover:border-[#00ffff]/20 transition-colors">
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-[#00ffff] transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-white/70 font-mono mb-1">{link.name}</div>
                  <div className="text-white group-hover:text-[#00ffff] transition-colors">
                    {link.handle}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
