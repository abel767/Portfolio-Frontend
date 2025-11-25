import { useState } from 'react'
import './App.css'

// Welcome
import { WelcomeScreen } from './components/WelcomeScreen'

// Desktop Components
import { TopBar } from './components/desktop/TopBar'
import { Desktop } from './components/desktop/Desktop'
import { Dock } from './components/desktop/Dock'
import { Window } from './components/desktop/Window'

// Desktop Windows
import { HomeWindow } from './components/windows/HomeWindow'
import { AboutWindow } from './components/windows/AboutWindow'
import { SkillsWindow } from './components/windows/SkillsWindow'
import { ProjectsWindow } from './components/windows/ProjectWindow'
import { ContactWindow } from './components/windows/ContactWindow'
import { TerminalWindow } from './components/windows/TerminalWindow'
import { FileManagerWindow } from './components/windows/FileManagerWindow'

// Mobile Portfolio
import { MobilePortfolio } from './components/Mobile/MobilePortfolio'

export default function App() {

  const [openWindows, setOpenWindows] = useState([]);
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [showWelcome, setShowWelcome] = useState(true);

  // OPEN WINDOW
  const openWindow = (id) => {
    const existingWindow = openWindows.find(w => w.id === id);

    if (!existingWindow) {
      setOpenWindows([...openWindows, { id, zIndex: maxZIndex + 1, isMinimized: false }]);
      setMaxZIndex(maxZIndex + 1);
    } else if (existingWindow.isMinimized) {
      restoreWindow(id);
    } else {
      bringToFront(id);
    }
  };

  // CLOSE WINDOW
  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
  };

  // MINIMIZE WINDOW
  const minimizeWindow = (id) => {
    setOpenWindows(openWindows.map(w =>
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  // RESTORE MINIMIZED WINDOW
  const restoreWindow = (id) => {
    const newMaxZ = maxZIndex + 1;
    setMaxZIndex(newMaxZ);
    setOpenWindows(openWindows.map(w =>
      w.id === id ? { ...w, isMinimized: false, zIndex: newMaxZ } : w
    ));
  };

  // BRING TO FRONT
  const bringToFront = (id) => {
    const newMaxZ = maxZIndex + 1;
    setMaxZIndex(newMaxZ);
    setOpenWindows(openWindows.map(w =>
      w.id === id ? { ...w, zIndex: newMaxZ } : w
    ));
  };

  // HELPERS
  const getWindowZIndex = (id) => {
    return openWindows.find(w => w.id === id)?.zIndex || 10;
  };

  const isWindowMinimized = (id) => {
    return openWindows.find(w => w.id === id)?.isMinimized || false;
  };

  // SHOW WELCOME FIRST
  if (showWelcome) {
    return <WelcomeScreen onFinish={() => setShowWelcome(false)} />;
  }

  // 📱 CHECK IF MOBILE
  const isMobile = window.innerWidth < 768;


  // ===============================
  //           RENDER
  // ===============================
  return (
    <>
      {isMobile ? (

        // 👉 *** MOBILE VERSION ***
        <MobilePortfolio />

      ) : (

        // 👉 *** DESKTOP VERSION ***
        <div className="h-screen w-screen overflow-hidden bg-[#000000] relative">
          
          {/* TOP BAR */}
          <TopBar />

          {/* DESKTOP ICONS */}
          <Desktop onIconClick={openWindow} openWindows={openWindows.map(w => w.id)} />

          {/* WINDOWS */}

          {openWindows.find(w => w.id === 'home') && !isWindowMinimized('home') && (
            <Window
              title="Home"
              onClose={() => closeWindow('home')}
              onMinimize={() => minimizeWindow('home')}
              onFocus={() => bringToFront('home')}
              zIndex={getWindowZIndex('home')}
              defaultPosition={{ x: 100, y: 80 }}
            >
              <HomeWindow />
            </Window>
          )}

          {openWindows.find(w => w.id === 'about') && !isWindowMinimized('about') && (
            <Window
              title="About"
              onClose={() => closeWindow('about')}
              onMinimize={() => minimizeWindow('about')}
              onFocus={() => bringToFront('about')}
              zIndex={getWindowZIndex('about')}
              defaultPosition={{ x: 150, y: 120 }}
            >
              <AboutWindow />
            </Window>
          )}

          {openWindows.find(w => w.id === 'skills') && !isWindowMinimized('skills') && (
            <Window
              title="Skills"
              onClose={() => closeWindow('skills')}
              onMinimize={() => minimizeWindow('skills')}
              onFocus={() => bringToFront('skills')}
              zIndex={getWindowZIndex('skills')}
              defaultPosition={{ x: 200, y: 100 }}
            >
              <SkillsWindow />
            </Window>
          )}

          {openWindows.find(w => w.id === 'projects') && !isWindowMinimized('projects') && (
            <Window
              title="Projects"
              onClose={() => closeWindow('projects')}
              onMinimize={() => minimizeWindow('projects')}
              onFocus={() => bringToFront('projects')}
              zIndex={getWindowZIndex('projects')}
              defaultPosition={{ x: 250, y: 140 }}
            >
              <ProjectsWindow />
            </Window>
          )}

          {openWindows.find(w => w.id === 'contact') && !isWindowMinimized('contact') && (
            <Window
              title="Contact"
              onClose={() => closeWindow('contact')}
              onMinimize={() => minimizeWindow('contact')}
              onFocus={() => bringToFront('contact')}
              zIndex={getWindowZIndex('contact')}
              defaultPosition={{ x: 300, y: 160 }}
            >
              <ContactWindow />
            </Window>
          )}

          {openWindows.find(w => w.id === 'terminal') && !isWindowMinimized('terminal') && (
            <Window
              title="Terminal"
              onClose={() => closeWindow('terminal')}
              onMinimize={() => minimizeWindow('terminal')}
              onFocus={() => bringToFront('terminal')}
              zIndex={getWindowZIndex('terminal')}
              defaultPosition={{ x: 350, y: 180 }}
            >
              <TerminalWindow />
            </Window>
          )}

          {openWindows.find(w => w.id === 'files') && !isWindowMinimized('files') && (
            <Window
              title="File Manager"
              onClose={() => closeWindow('files')}
              onMinimize={() => minimizeWindow('files')}
              onFocus={() => bringToFront('files')}
              zIndex={getWindowZIndex('files')}
              defaultPosition={{ x: 400, y: 200 }}
            >
              <FileManagerWindow />
            </Window>
          )}

          {/* DOCK */}
          <Dock onIconClick={openWindow} openWindows={openWindows.map(w => w.id)} />

        </div>
      )}
    </>
  );
}
