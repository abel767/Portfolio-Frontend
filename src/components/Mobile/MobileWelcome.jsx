import { useEffect, useState } from "react";

export default function MobileWelcome({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Auto fade-out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 600); // wait for fade animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 flex flex-col items-center justify-center
        bg-black text-white
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Fade-in text */}
      <h1 className="text-4xl font-bold tracking-wide animate-fadeInUp">
        Your Name
      </h1>

      <p className="text-sm mt-3 opacity-70 animate-fadeInUp delay-200">
        Portfolio
      </p>

      {/* Simple animated loading bar */}
      <div className="w-32 h-1 bg-white/20 mt-8 overflow-hidden rounded">
        <div className="h-full bg-white animate-loadingBar"></div>
      </div>
    </div>
  );
}
