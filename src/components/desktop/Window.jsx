import {useState, useRef, useEffect} from 'react'

export function Window({title, children, onClone, onFocus, zIndex, defaultPosition = {x: 100, y: 100}}) {
    const [position, setPosition] = useState(defaultPosition)
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState({x: 0, y:0})
    const windowRef = useRef(null)


    const handleMouseButton = (e) =>{
        if(e.target.closest('.window-contests')) return 

        onFocus()
        setIsDragging(true)


         if (windowRef.current){
            const rect = windowRef.current.getBoundingClientRect()
            setDragOffset({
               x: e.clientX - rect.left,
               y: e.clientY - rect.top
            })
         }
    }



    useEffect(()=>{
        const handleMouseMove = (e) =>{
            if (!dragOffset) return

            setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y,
            })
        }

        const handleMouseUp = () =>{
            setIsDragging(false)
        }


        if (!isDragging){
            document.addEventListener('mouseMove', handleMouseMove)
            document.addEventListener('mouseUp', handleMouseUp)
        }
    }, [isDragging, dragOffset])

return (
    <div
      ref={windowRef}
      className="fixed"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
      }}
      onMouseDown={onFocus}
    >
      <div className="bg-[#111111] rounded-xl shadow-2xl overflow-hidden border border-[#2A2A2A] min-w-[500px]">
        {/* Window title bar */}
        <div
          className="h-10 bg-[#1A1A1A] border-b border-[#2A2A2A] flex items-center justify-between px-4 cursor-move select-none"
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
              className="w-3 h-3 rounded-full bg-[#3A3A3A] hover:bg-yellow-500/80 transition-colors"
              aria-label="Minimize"
            />
            <button
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
        <div className="bg-[#111111]">
          {children}
        </div>
      </div>
    </div>
  );
}