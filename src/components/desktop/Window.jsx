import { useState, useRef, useEffect } from 'react';

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
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState(null);
  const [isOpening, setIsOpening] = useState(true);
  
  const windowRef = useRef(null);

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
      setSize({ width: window.innerWidth, height: window.innerHeight - 40 });
      setIsMaximized(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && !isMaximized) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }

      if (isResizing) {
        const rect = windowRef.current.getBoundingClientRect();
        const newSize = { ...size };
        const newPos = { ...position };

        if (resizeDirection.includes('e')) {
          newSize.width = Math.max(400, e.clientX - rect.left);
        }
        if (resizeDirection.includes('s')) {
          newSize.height = Math.max(300, e.clientY - rect.top);
        }
        if (resizeDirection.includes('w')) {
          const deltaX = e.clientX - rect.left;
          newSize.width = Math.max(400, rect.width - deltaX);
          newPos.x = e.clientX;
        }
        if (resizeDirection.includes('n')) {
          const deltaY = e.clientY - rect.top;
          newSize.height = Math.max(300, rect.height - deltaY);
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
    <div
      ref={windowRef}
      className={`fixed transition-all duration-10 ease-out ${
        isOpening 
          ? 'scale-95 opacity-0' 
          : isMinimizing
          ? 'scale-90 opacity-0 translate-y-20'
          : 'scale-100 opacity-100'
      }`}
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
      <div className="bg-[#111111] rounded-xl shadow-2xl overflow-hidden border border-[#2A2A2A] h-full flex flex-col">
        {/* Window title bar */}
        <div
          className="h-10 bg-[#1A1A1A] border-b border-[#2A2A2A] flex items-center justify-between px-4 cursor-move select-none flex-shrink-0"
          onMouseDown={handleMouseDown}
        >
          {/* Window controls */}
          <div className="flex gap-2 window-controls">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#3A3A3A] hover:bg-red-500/80 transition-colors"
              aria-label="Close"
            />
            <button
              onClick={onMinimize}
              className="w-3 h-3 rounded-full bg-[#3A3A3A] hover:bg-yellow-500/80 transition-colors"
              aria-label="Minimize"
            />
            <button
              onClick={handleMaximize}
              className="w-3 h-3 rounded-full bg-[#3A3A3A] hover:bg-green-500/80 transition-colors"
              aria-label="Maximize"
            />
          </div>
          
          {/* Title */}
          <div className="flex-1 text-center text-white/80 text-sm">
            {title}
          </div>
          
          {/* Spacer for balance */}
          <div className="w-[52px]"></div>
        </div>

        {/* Window content */}
        <div className="bg-[#111111] flex-1 overflow-auto">
          {children}
        </div>
      </div>

      {/* Resize handles */}
      {!isMaximized && (
        <>
          {/* Corners */}
          <div
            className="resize-handle absolute top-0 left-0 w-3 h-3 cursor-nw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
          />
          <div
            className="resize-handle absolute top-0 right-0 w-3 h-3 cursor-ne-resize"
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
          />
          <div
            className="resize-handle absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
          />
          <div
            className="resize-handle absolute bottom-0 right-0 w-3 h-3 cursor-se-resize"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
          />
          
          {/* Edges */}
          <div
            className="resize-handle absolute top-0 left-3 right-3 h-1 cursor-n-resize"
            onMouseDown={(e) => handleResizeStart(e, 'n')}
          />
          <div
            className="resize-handle absolute bottom-0 left-3 right-3 h-1 cursor-s-resize"
            onMouseDown={(e) => handleResizeStart(e, 's')}
          />
          <div
            className="resize-handle absolute left-0 top-3 bottom-3 w-1 cursor-w-resize"
            onMouseDown={(e) => handleResizeStart(e, 'w')}
          />
          <div
            className="resize-handle absolute right-0 top-3 bottom-3 w-1 cursor-e-resize"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
          />
        </>
      )}
    </div>
  );
}