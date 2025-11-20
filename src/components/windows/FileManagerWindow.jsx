import { FileText, Folder, Download } from 'lucide-react'

export function FileManagerWindow(){
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
    ]

    const handleDownload = (file) => {
        if (file.downloadUrl) {
            const link = document.createElement('a');
            link.href = file.downloadUrl;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

 return (
    <div className="p-8 min-h-[500px] flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-white/80 text-2xl font-light mb-8 text-center">My Documents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {files.map((file, index) => {
            const Icon = file.icon;
            return (
              <button
                key={index}
                onClick={() => handleDownload(file)}
                className="relative flex flex-col items-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-[#2A2A2A] hover:border-cyan-500/50 hover:from-cyan-500/10 hover:to-cyan-500/5 transition-all duration-300 group overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  
                  {/* File info */}
                  <div className="text-center">
                    <div className="text-white/90 text-lg font-medium mb-1">{file.name}</div>
                    <div className="text-white/40 text-sm mb-3">{file.type}</div>
                    <div className="text-cyan-400/60 text-xs">{file.size}</div>
                  </div>

                  {/* Download indicator */}
                  {file.downloadUrl && (
                    <div className="mt-4 flex items-center gap-2 text-cyan-400/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="w-3 h-3" />
                      <span>Click to download</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}