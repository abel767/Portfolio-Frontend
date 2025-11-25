import me from "../../assets/me.png";
import { motion } from "framer-motion";

export default function MobileHeader() {
  return (
    // Revert to h-screen and add bg-black
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center text-center px-6 relative">
      
      {/* Blended Image Background */}
      <motion.img
        src={me}
        alt="Me"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-4xl font-bold text-white">Abel Thomas</h1>
        <p className="text-gray-300 text-lg mt-2">
          Cybersecurity & Web Developer
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 text-gray-400 text-sm"
      >
        ↑ Scroll to explore
      </motion.div>

    </div>
  );
}