'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo/Text with typing effect */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 mb-4 animate-fade-in">
            SABRANA
          </h1>
          
          {/* Typing text animation */}
          <div className="text-xl md:text-2xl text-blue-200 h-8 flex items-center justify-center">
            <span className="inline-block">
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-blue-300 pr-2">
                Creative Design Studio
              </span>
            </span>
          </div>
        </div>

        {/* Animated spinner */}
        <div className="relative w-20 h-20 mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-300 animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-400 border-l-blue-300 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          
          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <p className="text-blue-300 text-sm tracking-widest animate-pulse mt-4">
          MEMUAT <span className="inline-block w-1 h-1 bg-blue-300 rounded-full ml-2 animate-bounce"></span>
        </p>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes typing {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-typing {
          animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #60a5fa; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
