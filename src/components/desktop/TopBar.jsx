import {Wifi, User, Power} from 'lucide-react'

import {useState, useEffect} from 'react';
import { Weekday } from 'react-day-picker';

export function TopBar(){
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() =>{
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (date) =>{
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
            
        })
    }

    const formatDate = (date) =>{
        return date.toLocalDateString('en-US', {
            Weekday: 'short',
            month: 'short',
            day: 'numeric'
        })
    }

    
 return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[#0A0A0A]/80 backdrop-blur-sm z-50 border-b border-[#2A2A2A]">
      <div className="h-full flex items-center justify-between px-4">
        {/* Left side - Time */}
        <div className="text-white/90 text-sm flex items-center gap-3">
          <span>{formatDate(currentTime)}</span>
          <span>{formatTime(currentTime)}</span>
        </div>

        {/* Right side - System icons */}
        <div className="flex items-center gap-4">
          <Wifi className="w-4 h-4 text-white/70 hover:text-white transition-colors cursor-pointer" />
          <User className="w-4 h-4 text-white/70 hover:text-white transition-colors cursor-pointer" />
          <Power className="w-4 h-4 text-white/70 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

