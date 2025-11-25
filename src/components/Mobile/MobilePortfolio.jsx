import MobileHeader from "./MobileHeader";
import MobileAbout from "./MobileAbout";
import MobileProjects from "./MobileProjects";
import MobileSkills from "./MobileSkills";
import MobileContact from "./MobileContact";
import { useState, useEffect } from "react"; 

export function MobilePortfolio() {
  const [tab, setTab] = useState("about");
  const [showTabsAndContent, setShowTabsAndContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show tabs and content when scrolled past 80% of viewport height
      const scrollThreshold = window.innerHeight * 0.8;
      setShowTabsAndContent(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">

      {/* 1. HERO SECTION - Full screen header */}
      <MobileHeader />

      {/* 2. TAB BAR - Only visible after scrolling, then becomes sticky */}
      <div 
        className={`sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-opacity duration-300 ${
          showTabsAndContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-around py-3">
          {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`text-sm transition-colors px-3 pb-1 ${
                    tab === item.id 
                    ? "text-cyan-300 border-b-2 border-cyan-400" 
                    : "text-white/60"
                }`}
            >
                {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAIN CONTENT - Fades in after scrolling */}
      <main 
        className={`px-6 py-8 -mt-4 min-h-screen transition-opacity duration-500 ${
          showTabsAndContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {tab === "about" && <MobileAbout />}
        {tab === "projects" && <MobileProjects />}
        {tab === "skills" && <MobileSkills />}
        {tab === "contact" && <MobileContact />}
      </main>
      
    </div>
  );
}