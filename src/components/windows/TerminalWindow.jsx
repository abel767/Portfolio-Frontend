import { useEffect, useState } from 'react';

export function TerminalWindow() {
  const [lines, setLines] = useState([]);
  
  const terminalLines = [
    '$ whoami',
    'abel@portfolio:~$ Full-stack MERN Developer',
    '',
    '$ ls -la skills/',
    'drwxr-xr-x  mongodb',
    'drwxr-xr-x  express',
    'drwxr-xr-x  react',
    'drwxr-xr-x  nodejs',
    'drwxr-xr-x  cybersecurity',
    '',
    '$ cat experience.txt',
    'Building modern web applications with MERN stack...',
    'Learning cybersecurity practices...',
    'Implementing secure coding patterns...',
    '',
    '$ echo $SKILLS',
    'MongoDB, Express.js, React, Node.js, Security',
    '',
    '$ _',
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="p-6 min-h-[400px] bg-black/90 font-mono text-sm">
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div 
            key={index}
            className={`
              ${line?.startsWith('$') ? 'text-cyan-400' : 'text-green-400/90'}
              ${line?.includes('drwxr-xr-x') ? 'text-blue-400/80 pl-2' : ''}
              ${line === '' ? 'h-3' : ''}
            `}
          >
            {line}
          </div>
        ))}
        {lines.length === terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
        )}
      </div>
    </div>
  );
}


