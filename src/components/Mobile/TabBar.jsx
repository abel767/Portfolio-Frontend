import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";

export function TabBar() {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  // Show tab bar after scrolling past header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrollPosition > 100); // show after header

      // Update active tab based on scroll
      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (tabId) => {
    const element = document.getElementById(tabId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // adjust for TabBar height
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-white font-mono">AT</div> */}

        {/* Tabs */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className="relative px-4 py-2 text-white/70 hover:text-white font-mono"
              >
                <span className={`relative z-10 ${isActive ? "text-[#00ffff]" : ""}`}>
                  {tab.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ffff]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#00ffff]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </motion.nav>
  );
}
