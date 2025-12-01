import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function Window({ 
  title, 
  children, 
  onClose,
  onMinimize,
  onFocus, 
  zIndex, 
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 800, height: 600 },
  isMinimizing = false
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState(null);
  const [isOpening, setIsOpening] = useState(true);
  
  const windowRef = useRef(null);

  useEffect(() => {
    // Responsive default size based on screen width
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let windowWidth = defaultSize.width;
    let windowHeight = defaultSize.height;
    
     // Keep width consistent across all screen sizes
    windowWidth = Math.min(defaultSize.width, screenWidth - 100);
    
    // Adjust height based on screen size
    if (screenWidth >= 1024 && screenWidth <= 1440) {
      windowHeight = Math.min(defaultSize.height * 0.8, screenHeight - 200);
    }
    // For smaller laptops < 1024px, reduce height by 30% 
    else if (screenWidth < 1024) {
      windowHeight = Math.min(defaultSize.height * 0.7, screenHeight - 180);
    }
    // For large screens, keep default height
    else {
      windowHeight = Math.min(defaultSize.height, screenHeight - 200);
    }

    setSize({ width: windowWidth, height: windowHeight });

    // Center the window on open
    const centerX = (screenWidth - windowWidth) / 2;
    const centerY = (screenHeight - windowHeight - 100) / 2; // Leave space for dock

    setPosition({ x: Math.max(0, centerX), y: Math.max(40, centerY) });
  }, []);

  // Opening animation
  useEffect(() => {
    setIsOpening(true);
    const timer = setTimeout(() => setIsOpening(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls') || e.target.closest('.resize-handle')) return;
    
    onFocus();
    setIsDragging(true);
    
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleResizeStart = (e, direction) => {
    e.stopPropagation();
    onFocus();
    setIsResizing(true);
    setResizeDirection(direction);
  };

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(preMaximizeState.position);
      setSize(preMaximizeState.size);
      setIsMaximized(false);
    } else {
      setPreMaximizeState({ position, size });
      setPosition({ x: 0, y: 40 });
      // Leave space for dock at bottom (120px for smaller screens)
      setSize({ 
        width: window.innerWidth, 
        height: window.innerWidth < 1440 ? window.innerHeight - 140 : window.innerHeight - 40 
      });
      setIsMaximized(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Keep window within bounds, accounting for dock
        const maxX = window.innerWidth - size.width;
        const maxY = window.innerHeight - size.height - 100;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(40, Math.min(newY, maxY)),
        });
      }

      if (isResizing) {
        const rect = windowRef.current.getBoundingClientRect();
        const newSize = { ...size };
        const newPos = { ...position };

        // Responsive minimum sizes
        const minWidth = window.innerWidth < 1024 ? 300 : 400;
        const minHeight = window.innerWidth < 1024 ? 250 : 300;

        if (resizeDirection.includes('e')) {
          newSize.width = Math.max(minWidth, e.clientX - rect.left);
        }
        if (resizeDirection.includes('s')) {
          newSize.height = Math.max(minHeight, e.clientY - rect.top);
        }
        if (resizeDirection.includes('w')) {
          const deltaX = e.clientX - rect.left;
          newSize.width = Math.max(minWidth, rect.width - deltaX);
          newPos.x = e.clientX;
        }
        if (resizeDirection.includes('n')) {
          const deltaY = e.clientY - rect.top;
          newSize.height = Math.max(minHeight, rect.height - deltaY);
          newPos.y = e.clientY;
        }

        setSize(newSize);
        if (resizeDirection.includes('w') || resizeDirection.includes('n')) {
          setPosition(newPos);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setResizeDirection(null);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, resizeDirection, position, size, isMaximized]);

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{
        scale: isOpening ? 0.95 : isMinimizing ? 0.9 : 1,
        opacity: isOpening || isMinimizing ? 0 : 1,
        y: isMinimizing ? 20 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed"
      style={{
        left: isMaximized ? 0 : `${position.x}px`,
        top: isMaximized ? 40 : `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex,
        transformOrigin: 'bottom center',
      }}
      onMouseDown={onFocus}
    >
      <motion.div
        className="bg-black/90 rounded-xl shadow-2xl overflow-hidden border-2 border-white/20 h-full flex flex-col backdrop-blur-xl relative"
        animate={{
          boxShadow: [
            '0 0 30px rgba(255, 255, 255, 0.1)',
            '0 0 40px rgba(255, 255, 255, 0.15)',
            '0 0 30px rgba(255, 255, 255, 0.1)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {/* Subtle glitch line */}
        <motion.div
          className="absolute inset-0 bg-white/5 pointer-events-none"
          animate={{
            opacity: [0, 0, 0.1, 0, 0],
            scaleY: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 10,
          }}
        />

        {/* Window title bar - responsive height */}
        <motion.div
          className="h-10 lg:h-12 bg-black/60 border-b-2 border-white/20 flex items-center justify-between px-3 lg:px-4 cursor-move select-none flex-shrink-0 relative overflow-hidden"
          onMouseDown={handleMouseDown}
        >
          {/* Glitch effect on drag */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            animate={
              isDragging
                ? {
                    opacity: [0, 0.1, 0],
                    x: [0, -3, 3, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.1,
              repeat: isDragging ? Infinity : 0,
            }}
          />

          {/* Window controls - Linux style on right */}
          <div className="flex-1 text-center text-white text-xs lg:text-sm font-mono relative">
            <span className="relative z-10">{title}</span>
            <motion.span
              className="absolute inset-0 text-white opacity-50"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 8,
              }}
            >
              {title}
            </motion.span>
          </div>
          
          {/* Control buttons on right - responsive sizing */}
          <div className="flex gap-1.5 lg:gap-2 window-controls relative z-10">
            <motion.button
              onClick={onMinimize}
              className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-yellow-500 border border-yellow-600 hover:bg-yellow-400 transition-all"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Minimize"
            >
              <span className="text-[8px] text-yellow-900 flex items-center justify-center">−</span>
            </motion.button>
            <motion.button
              onClick={handleMaximize}
              className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-green-500 border border-green-600 hover:bg-green-400 transition-all"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Maximize"
            >
              <span className="text-[8px] text-green-900 flex items-center justify-center">□</span>
            </motion.button>
            <motion.button
              onClick={onClose}
              className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-red-500 border border-red-600 hover:bg-red-400 transition-all"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <span className="text-[8px] text-red-900 flex items-center justify-center">×</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Window content */}
        <div className="bg-black/40 flex-1 overflow-auto relative">
          {/* Content scanline effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)',
            }}
          />
          {children}
        </div>
      </motion.div>

      {/* Resize handles - enhanced visibility, responsive sizing */}
      {!isMaximized && (
        <>
          {/* Corners */}
          <motion.div
            className="resize-handle absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 cursor-nw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 bg-white/20 rounded-tl-lg border-l-2 border-t-2 border-white/40" />
          </motion.div>
          <motion.div
            className="resize-handle absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 cursor-ne-resize"
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 bg-white/20 rounded-tr-lg border-r-2 border-t-2 border-white/40 ml-auto" />
          </motion.div>
          <motion.div
            className="resize-handle absolute bottom-0 left-0 w-3 h-3 lg:w-4 lg:h-4 cursor-sw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 bg-white/20 rounded-bl-lg border-l-2 border-b-2 border-white/40 mt-auto" />
          </motion.div>
          <motion.div
            className="resize-handle absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 cursor-se-resize"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 bg-white/20 rounded-br-lg border-r-2 border-b-2 border-white/40 ml-auto mt-auto" />
          </motion.div>
          
          {/* Edges - invisible but functional */}
          <div
            className="resize-handle absolute top-0 left-4 right-4 h-2 cursor-n-resize hover:bg-white/10 transition-colors"
            onMouseDown={(e) => handleResizeStart(e, 'n')}
          />
          <div
            className="resize-handle absolute bottom-0 left-4 right-4 h-2 cursor-s-resize hover:bg-white/10 transition-colors"
            onMouseDown={(e) => handleResizeStart(e, 's')}
          />
          <div
            className="resize-handle absolute left-0 top-4 bottom-4 w-2 cursor-w-resize hover:bg-white/10 transition-colors"
            onMouseDown={(e) => handleResizeStart(e, 'w')}
          />
          <div
            className="resize-handle absolute right-0 top-4 bottom-4 w-2 cursor-e-resize hover:bg-white/10 transition-colors"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
          />
        </>
      )}
    </motion.div>
  );
}