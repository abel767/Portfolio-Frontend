import { motion } from 'motion/react';
import { FileText, Folder, Download, ChevronRight, FolderOpen, HardDrive, File, Home, Star, Clock, Trash2, Search, List, Grid3x3, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function FileManagerWindow() {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const files = [
    {
      name: 'Resume.pdf',
      type: 'PDF Document',
      size: '72 KB',
      modified: '2025-01-15',
      downloadUrl: '/AbelThomas.pdf',
      icon: FileText
    },
    {
      name: 'Ethical Hacking Certificate - Udemy.pdf',
      type: 'PDF Document',
      size: '99 KB',
      modified: '2025-01-10',
      downloadUrl: '/Udemy-Ethical-Hacking.pdf',
      icon: FileText
    },
    {
      name: 'Certified Cyber Security Analyst - RedTeam360.pdf',
      type: 'PDF Document',
      size: '89 KB',
      modified: '2025-01-10',
      downloadUrl: '/certificate.pdf',
      icon: FileText
    },
    {
      name: 'Projects',
      type: 'Folder',
      size: '3 items',
      modified: '2025-01-12',
      icon: Folder
    },
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
    <div className="w-full h-full flex flex-col text-white font-mono bg-black/40">
      
      {/* Top Navigation Bar */}
      <div className="h-12 border-b-2 border-white/20 flex items-center px-4 bg-black/60 backdrop-blur-sm gap-4">
        {/* Navigation buttons */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 rounded bg-white/5 border border-white/20 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 rounded bg-white/5 border border-white/20 hover:bg-white/10 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 flex-1">
          <Home className="w-4 h-4 text-white/60" />
          <ChevronRight className="w-3 h-3 text-white/40" />
          <span className="text-white/80 text-sm">Documents</span>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/20 rounded-md min-w-[200px]">
          <Search className="w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search files..."
            className="bg-transparent border-none outline-none text-white text-sm placeholder-white/40 flex-1"
          />
        </div>

        {/* View toggle */}
        <div className="flex gap-1 bg-white/5 border border-white/20 rounded-md p-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <Grid3x3 className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <List className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT SIDEBAR */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-56 border-r-2 border-white/20 bg-black/60 backdrop-blur-md p-4 space-y-6 overflow-y-auto"
        >
          
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50 mb-3 font-bold">FAVORITES</p>
            <div className="space-y-1">
              <SidebarItem icon={Home} label="Home" />
              <SidebarItem icon={Star} label="Starred" />
              <SidebarItem icon={Clock} label="Recent" />
              <SidebarItem icon={Trash2} label="Trash" />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/50 mb-3 font-bold">LOCATIONS</p>
            <div className="space-y-1">
              <SidebarItem icon={FolderOpen} label="Documents" active />
              <SidebarItem icon={File} label="Downloads" />
              <SidebarItem icon={HardDrive} label="This PC" />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/50 mb-3 font-bold">FOLDERS</p>
            <div className="space-y-1">
              <SidebarItem icon={Folder} label="Certificates" />
              <SidebarItem icon={Folder} label="Projects" />
              <SidebarItem icon={Folder} label="Notes" />
            </div>
          </div>

          {/* Storage indicator */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-xs text-white/50 mb-2">Storage</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-white/40 mt-1">6.5 GB of 10 GB used</p>
          </div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Status bar */}
          <div className="h-10 border-b border-white/20 flex items-center px-4 bg-black/40 text-xs text-white/60">
            <span>{files.length} items</span>
            {selected && (
              <>
                <span className="mx-2">•</span>
                <span>{selected} selected</span>
              </>
            )}
          </div>

          {/* FILE CONTENT */}
          <div className="flex-1 p-6 overflow-auto">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {files.map((file, i) => {
                  const Icon = file.icon;
                  const isSelected = selected === file.name;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                      onClick={() => handleOpen(file)}
                      onDoubleClick={() => file.type === 'Folder' && console.log('Open folder')}
                      className={`
                        cursor-pointer p-4 rounded-lg border-2 bg-black/60 backdrop-blur-sm
                        transition-all duration-200 relative group
                        ${isSelected
                          ? 'border-white/60 bg-white/10'
                          : 'border-white/20 hover:bg-white/5 hover:border-white/40'
                        }
                      `}
                    >
                      {/* Glitch effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/0 rounded-lg"
                        animate={{
                          opacity: [0, 0, 0.3, 0, 0],
                          x: [0, -1, 1, 0],
                        }}
                        transition={{
                          duration: 0.1,
                          repeat: Infinity,
                          repeatDelay: 10,
                        }}
                      />

                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto rounded-lg bg-white/5 border border-white/20 flex items-center justify-center mb-3 group-hover:border-white/40 transition-colors">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Info */}
                      <div className="text-center">
                        <p className="text-white text-sm font-medium truncate mb-1">{file.name}</p>
                        <p className="text-white/40 text-xs">{file.size}</p>
                      </div>

                      {/* Download hint */}
                      {file.downloadUrl && (
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="p-1.5 bg-black/80 border border-white/40 rounded">
                            <Download className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-1">
                {files.map((file, i) => {
                  const Icon = file.icon;
                  const isSelected = selected === file.name;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ x: 5 }}
                      onClick={() => handleOpen(file)}
                      className={`
                        cursor-pointer px-4 py-3 rounded-lg border bg-black/60 backdrop-blur-sm
                        transition-all duration-200 flex items-center gap-4
                        ${isSelected
                          ? 'border-white/60 bg-white/10'
                          : 'border-white/20 hover:bg-white/5 hover:border-white/40'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5 text-white flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{file.name}</p>
                      </div>
                      <div className="text-white/40 text-xs w-24 text-right">{file.type}</div>
                      <div className="text-white/40 text-xs w-20 text-right">{file.size}</div>
                      <div className="text-white/40 text-xs w-24 text-right">{file.modified}</div>
                      {file.downloadUrl && (
                        <Download className="w-4 h-4 text-white/60 hover:text-white transition-colors" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// Sidebar item component
function SidebarItem({ icon: Icon, label, active }) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm
        transition-all duration-200 relative overflow-hidden group
        ${
          active
            ? "bg-white/15 border border-white/30 text-white"
            : "text-white/70 hover:bg-white/5 hover:text-white border border-transparent"
        }
      `}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          opacity: [0, 0.05, 0.05, 0],
          transition: { duration: 0.5 }
        }}
      />
      <Icon className="w-4 h-4 relative z-10" />
      <span className="relative z-10">{label}</span>
    </motion.div>
  );
}