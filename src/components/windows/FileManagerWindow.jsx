import {Folder, FileCode, FileText, Image} from 'lucide-react'

export function FileManagerWindow(){
    const folders = [
        {name: 'Projects', icon: Folder, count: 12 },
        {name: 'Documents', icon: FileText, count: 24},
        {name: 'Code', icon: FileCode, count: 156}, 
        {name: 'Images', icon: Image, count: 48}
    ]

    const files = [
        {name: 'Resume.pdf', type: 'PDF Document', size: '245 KB'},
        {name: 'Certificates', type: 'Folder', size: '8 items'},
        {name: 'About-me.txt', type: 'Text File', size: '2 KB'},
    ]
 return (
    <div className="p-6 min-h-[500px]">
      <div className="space-y-6">
        {/* Quick Access Folders */}
        <div>
          <h3 className="text-white/60 text-sm mb-3 uppercase tracking-wider">Quick Access</h3>
          <div className="grid grid-cols-4 gap-3">
            {folders.map((folder) => {
              const Icon = folder.icon;
              return (
                <button
                  key={folder.name}
                  className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-[#2A2A2A] hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <Icon className="w-10 h-10 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 text-sm">{folder.name}</span>
                  <span className="text-white/40 text-xs mt-1">{folder.count} items</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Files */}
        <div>
          <h3 className="text-white/60 text-sm mb-3 uppercase tracking-wider">Recent Files</h3>
          <div className="space-y-2">
            {files.map((file, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-[#2A2A2A] hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <FileText className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-white/80 text-sm">{file.name}</div>
                  <div className="text-white/40 text-xs">{file.type}</div>
                </div>
                <div className="text-white/40 text-xs">{file.size}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

