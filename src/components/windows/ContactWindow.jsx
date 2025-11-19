import { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

export function ContactWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-10">
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-3xl mb-2">Get In Touch</h2>
          <p className="text-[#B0B0B0]">
            Have a project in mind? Let's talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name field */}
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-white/80 text-sm">
              <User className="w-4 h-4 text-cyan-400" />
              <span>Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email field */}
          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center gap-2 text-white/80 text-sm">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message field */}
          <div className="space-y-2">
            <label htmlFor="message" className="flex items-center gap-2 text-white/80 text-sm">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors border border-cyan-500/30"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
