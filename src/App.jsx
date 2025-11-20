import { useState } from 'react'
import './App.css'
import { TopBar } from './components/desktop/TopBar'
import { Desktop } from './components/desktop/Desktop'
import { Dock } from './components/desktop/Dock'
import { Window } from './components/desktop/Window'
import { HomeWindow } from './components/windows/HomeWindow'
import { AboutWindow } from './components/windows/AboutWindow'
import { SkillsWindow } from './components/windows/SkillsWindow'
import { ProjectsWindow } from './components/windows/ProjectWindow'
import { ContactWindow } from './components/windows/ContactWindow'
import { TerminalWindow } from './components/windows/TerminalWindow'
import { FileManagerWindow } from './components/windows/FileManagerWindow'
import { BringToFront, Wind } from 'lucide-react'
import { id } from 'date-fns/locale'

export default function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [maxZIndex, setMaxZIndex] = useState(10);

  const openWindow = (id) => {
    if (!openWindows.find(w => w.id === id)) {
      setOpenWindows([...openWindows, { id, zIndex: maxZIndex + 1 }]);
      setMaxZIndex(maxZIndex + 1);
    } else {
      bringToFront(id);
    }
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
  };

  const bringToFront = (id) => {
    const newMaxZ = maxZIndex + 1;
    setMaxZIndex(newMaxZ);
    setOpenWindows(openWindows.map(w => 
      w.id === id ? { ...w, zIndex: newMaxZ } : w
    ));
  };

  const getWindowZIndex = (id) => {
    return openWindows.find(w => w.id === id)?.zIndex || 10;
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#000000] relative">
      <TopBar />
      <Desktop />
      
      {/* Windows */}
      {openWindows.find(w => w.id === 'home') && (
        <Window
          title="Home"
          onClose={() => closeWindow('home')}
          onFocus={() => bringToFront('home')}
          zIndex={getWindowZIndex('home')}
          defaultPosition={{ x: 100, y: 80 }}
        >
          <HomeWindow />
        </Window>
      )}

      {openWindows.find(w => w.id === 'about') && (
        <Window
          title="About"
          onClose={() => closeWindow('about')}
          onFocus={() => bringToFront('about')}
          zIndex={getWindowZIndex('about')}
          defaultPosition={{ x: 150, y: 120 }}
        >
          <AboutWindow />
        </Window>
      )}

      {openWindows.find(w => w.id === 'skills') && (
        <Window
          title="Skills"
          onClose={() => closeWindow('skills')}
          onFocus={() => bringToFront('skills')}
          zIndex={getWindowZIndex('skills')}
          defaultPosition={{ x: 200, y: 100 }}
        >
          <SkillsWindow />
        </Window>
      )}

      {openWindows.find(w => w.id === 'projects') && (
        <Window
          title="Projects"
          onClose={() => closeWindow('projects')}
          onFocus={() => bringToFront('projects')}
          zIndex={getWindowZIndex('projects')}
          defaultPosition={{ x: 250, y: 140 }}
        >
          <ProjectsWindow />
        </Window>
      )}

      {openWindows.find(w => w.id === 'contact') && (
        <Window
          title="Contact"
          onClose={() => closeWindow('contact')}
          onFocus={() => bringToFront('contact')}
          zIndex={getWindowZIndex('contact')}
          defaultPosition={{ x: 300, y: 160 }}
        >
          <ContactWindow />
        </Window>
      )}

      {openWindows.find(w => w.id === 'terminal') && (
        <Window
          title="Terminal"
          onClose={() => closeWindow('terminal')}
          onFocus={() => bringToFront('terminal')}
          zIndex={getWindowZIndex('terminal')}
          defaultPosition={{ x: 350, y: 180 }}
        >
          <TerminalWindow />
        </Window>
      )}

      {openWindows.find(w => w.id === 'files') && (
        <Window
          title="File Manager"
          onClose={() => closeWindow('files')}
          onFocus={() => bringToFront('files')}
          zIndex={getWindowZIndex('files')}
          defaultPosition={{ x: 400, y: 200 }}
        >
          <FileManagerWindow />
        </Window>
      )}

      <Dock onIconClick={openWindow} openWindows={openWindows.map(w => w.id)} />
    </div>
  );
}
