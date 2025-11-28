import { TabBar } from "./TabBar";
import { MobileHeader } from "./MobileHeader";
import { MobileAbout } from "./MobileAbout";
import { MobileProjects } from "./MobileProjects";
import { MobileSkills } from "./MobileSkills";
import { MobileContact } from "./MobileContact";

export function MobilePortfolio() {
  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      {/* TabBar */}
      <TabBar />

      {/* Header */}
      <MobileHeader />

      {/* Sections */}
      <section id="about">
        <MobileAbout />
      </section>

      <section id="projects">
        <MobileProjects />
      </section>

      <section id="skills">
        <MobileSkills />
      </section>

      <section id="contact">
        <MobileContact />
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-6 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 font-mono mb-2">
            © 2025 Abel Thomas. All rights reserved.
          </p>
          <p className="text-white/40 font-mono">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
