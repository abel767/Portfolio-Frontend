import {Home, User, Code, Briefcase, Mail, Terminal, FolderOpen} from 'lucide-react'

export function Dock({ onIconClick, openWindows}){
    const dockItems = [
        {id: 'home', icon: Home, label: 'Home'},
        {id: 'about', icon: Home, label: 'About'},
        {id: 'skills', icon: Home, label: 'Skills'},
        {id: 'projects', icon: Home, label: 'Projects'},
        {id: 'contact', icon: Home, label: 'Contact'},
        {id: 'terminal', icon: Home, label: 'Terminal'},
        {id: 'files', icon: Home, label: 'Files'},
    ]
 return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-3">
      <div className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-[#2A2A2A] rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openWindows.includes(item.id);
            
            return (
              <button
                key={item.id}
                onClick={() => onIconClick(item.id)}
                className="group relative"
                aria-label={item.label}
              >
                {/* Icon container */}
                <div
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center
                    transition-all duration-200 ease-out
                    ${isOpen 
                      ? 'bg-white/10 scale-95' 
                      : 'bg-white/5 hover:bg-white/10 hover:scale-110'
                    }
                  `}
                >
                  <Icon 
                    className={`w-6 h-6 transition-colors ${
                      isOpen ? 'text-cyan-400' : 'text-white/70 group-hover:text-white'
                    }`} 
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-[#1A1A1A] backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#2A2A2A]">
                    <span className="text-white text-xs whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1A1A] border-r border-b border-[#2A2A2A] rotate-45"></div>
                </div>

                {/* Active indicator */}
                {isOpen && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}