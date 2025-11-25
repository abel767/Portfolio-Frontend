import { FileText, Folder, Download, ChevronRight, FolderOpen, HardDrive, File } from 'lucide-react'
import { useState } from 'react'

export function FileManagerWindow() {
  const [selected, setSelected] = useState(null);

  const files = [
    {
      name: 'Resume.pdf',
      type: 'PDF Document',
      size: '72 KB',
      downloadUrl: '/AbelThomas.pdf',
      icon: FileText
    },
    {
      name: 'Certificates',
      type: 'Folder',
      size: '8 items',
      icon: Folder
    }
  ];

  const handleOpen = (file) => {
    setSelected(file.name);
    if (file.downloadUrl) handleDownload(file);
  };

  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-full p-6 text-white">
      <div className="flex h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">

        {/* LEFT SIDEBAR */}
        <div className="w-52 border-r border-white/10 bg-white/5 backdrop-blur-md p-4 space-y-6">

          <div>
            <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Quick Access</p>
            <div className="space-y-2">
              <SidebarItem icon={FolderOpen} label="Documents" active />
              <SidebarItem icon={File} label="Downloads" />
              <SidebarItem icon={HardDrive} label="This PC" />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Folders</p>
            <div className="space-y-2">
              <SidebarItem icon={Folder} label="Certificates" />
              <SidebarItem icon={Folder} label="Projects" />
              <SidebarItem icon={Folder} label="Notes" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">

          {/* TOP BAR */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 bg-white/5 backdrop-blur-sm">
            <ChevronRight className="w-4 h-4 text-white/40 mr-2" />
            <span className="text-white/70">Documents</span>
          </div>

          {/* FILE GRID */}
          <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-auto">
            {files.map((file, i) => {
              const Icon = file.icon;
              const isSelected = selected === file.name;

              return (
                <div
                  key={i}
                  onClick={() => handleOpen(file)}
                  className={`
                    cursor-pointer p-4 rounded-xl border bg-white/5 backdrop-blur-sm
                    transition-all duration-200
                    ${isSelected
                      ? 'border-cyan-500/50 bg-cyan-500/10'
                      : 'border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <p className="text-white/90 text-sm font-medium truncate">{file.name}</p>
                    <p className="text-white/40 text-xs">{file.type}</p>
                  </div>

                  {/* Download hint */}
                  {file.downloadUrl && (
                    <div className="flex items-center justify-center gap-1 mt-2 text-cyan-400/60 text-[10px]">
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

// Small component for sidebar items
function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm
        transition-all duration-200
        ${
          active
            ? "bg-cyan-500/20 border border-cyan-500/30 text-white"
            : "text-white/70 hover:bg-white/10 hover:text-white"
        }
      `}
    >
      <Icon className="w-4 h-4" />
      {label}
    </div>
  );
}
