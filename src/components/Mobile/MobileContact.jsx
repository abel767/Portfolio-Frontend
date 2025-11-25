import { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function MobileContact() {
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
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus({ loading: false, success: false, error: null });
        }, 4000);
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
        error: "Network error. Please check if the server is running.",
      });
    }
  };

  return (
    <div className="w-full min-h-screen px-5 py-10 bg-black text-white">
      <div className="max-w-md mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <p className="text-gray-400 text-sm">
            Have something to discuss? Let's connect.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-sm text-gray-300">
              <User className="w-4 h-4 text-cyan-400" />
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              disabled={status.loading}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center gap-2 text-sm text-gray-300">
              <Mail className="w-4 h-4 text-cyan-400" />
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              disabled={status.loading}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="flex items-center gap-2 text-sm text-gray-300">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={status.loading}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Success */}
          {status.success && (
            <div className="flex gap-2 items-center p-3 bg-green-600/20 border border-green-600/40 text-green-400 rounded-lg text-sm">
              <CheckCircle className="w-5 h-5" />
              Message sent successfully!
            </div>
          )}

          {/* Error */}
          {status.error && (
            <div className="flex gap-2 items-center p-3 bg-red-600/20 border border-red-600/40 text-red-400 rounded-lg text-sm">
              <AlertCircle className="w-5 h-5" />
              {status.error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full flex justify-center items-center gap-2 p-3 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-all disabled:opacity-50"
          >
            {status.loading ? (
              <>
                <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
