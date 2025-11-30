import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function ContactWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: null });
        }, 5000);
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to send message',
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Network error. Please check if the server is running.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/abel767',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abel-thomas-60193b27b',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:abelthomas.pro@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <div className="p-10 font-mono relative">
      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
        }}
      />

      <div className="space-y-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-white text-3xl mb-3 font-bold relative"
            animate={{
              textShadow: [
                '0 0 0 rgba(255,255,255,0)',
                '0 0 10px rgba(255,255,255,0.3)',
                '0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 6,
            }}
          >
            <span className="relative z-10">&gt; GET_IN_TOUCH</span>
            <motion.span
              className="absolute inset-0 text-white opacity-30"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 6,
              }}
            >
              &gt; GET_IN_TOUCH
            </motion.span>
            
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.h2>
          <p className="text-gray-400 text-sm">
            Have a project or opportunity? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center gap-2 text-white/80 text-sm">
                <User className="w-4 h-4 text-white" />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.loading}
                className="w-full px-4 py-3 bg-black/60 border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-white/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4 text-white" />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.loading}
                className="w-full px-4 py-3 bg-black/60 border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-white/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-white/80 text-sm">
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={status.loading}
                className="w-full px-4 py-3 bg-black/60 border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-white/60 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Success message */}
            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/40 rounded-lg text-green-400"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Message sent! I'll get back to you soon.</span>
              </motion.div>
            )}

            {/* Error message */}
            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/40 rounded-lg text-red-400"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{status.error}</span>
              </motion.div>
            )}

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status.loading}
              whileHover={{ scale: status.loading ? 1 : 1.02 }}
              whileTap={{ scale: status.loading ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg transition-all border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-white font-semibold relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{
                  x: '100%',
                  transition: { duration: 0.5 }
                }}
              />
              {status.loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin relative z-10" />
                  <span className="relative z-10">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <div className="bg-white/5 border border-white/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Direct Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/60" />
                  <a
                    href="mailto:abelthomas.pro@gmail.com"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    abelthomas.pro@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-white/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Connect Online</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                        {link.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 border border-white/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Availability</h3>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-white"
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(255, 255, 255, 0.4)',
                      '0 0 10px rgba(255, 255, 255, 0.8)',
                      '0 0 0 rgba(255, 255, 255, 0.4)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-white/80 text-sm">Available for new opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}