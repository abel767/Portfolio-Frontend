import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export function MobileContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/abelthomas", handle: "@abelthomas" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/abelthomas", handle: "/in/abelthomas" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/abelthomas", handle: "@abelthomas" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-background py-20 px-6"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-3 py-1 bg-[#00ffff]/10 border border-accent/30 text-accent mb-6 font-mono">
            Contact
          </div>
          <h2 className="text-foreground mb-4 text-3xl font-semibold">Let's Connect</h2>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities and collaborations.
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
        <label htmlFor={field} className="block mb-2 text-white/90 capitalize">
          {field}
        </label>
        {isTextarea ? (
          <textarea
            id={field}
            rows={6}
            placeholder="Tell me about your project..."
            value={formData[field]}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-[#111] border border-white/30 text-white placeholder-white/40 focus:border-[#00ffff] focus:outline-none transition-all duration-300 resize-none"
          />
        ) : (
          <input
            id={field}
            type={field === "email" ? "email" : "text"}
            placeholder={field === "name" ? "Your name" : "your.email@example.com"}
            value={formData[field]}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-[#111] border border-white/30 text-white placeholder-white/40 focus:border-[#00ffff] focus:outline-none transition-all duration-300"
          />
        )}
      </div>
    );
  })}

  {/* Submit button */}
  <button
    type="submit"
    className="w-full px-6 py-4 bg-[#00ffff] text-black hover:bg-[#00ffff]/90 transition-colors font-mono flex items-center justify-center gap-2"
  >
    <Send className="w-5 h-5" />
    <span>Send Message</span>
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
            <span className="px-4 bg-background text-muted-foreground font-mono">
              or reach out via
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <a
            href="mailto:abel.thomas@email.com"
            className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-accent/30 transition-all duration-300"
          >
            <div className="p-3 bg-accent/10 border border-accent/20">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <div className="text-foreground/70 font-mono mb-1">Email</div>
              <div className="text-foreground group-hover:text-accent transition-colors">
                abel.thomas@email.com
              </div>
            </div>
          </a>

          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="p-3 bg-card/50 border border-border group-hover:border-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-foreground/70 font-mono mb-1">{link.name}</div>
                  <div className="text-foreground group-hover:text-accent transition-colors">
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
