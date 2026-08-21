import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, RefreshCw } from 'lucide-react';

interface DevAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export type AvatarStyle = 'memoji' | 'cyber-dev' | 'hologram' | 'minimal-vector';

export const DevAvatar: React.FC<DevAvatarProps> = ({
  size = 'lg',
  showBadge = false,
}) => {
  const [avatarStyle, setAvatarStyle] = useState<AvatarStyle>('cyber-dev');
  const [isHovered, setIsHovered] = useState(false);

  // Auto switch avatar theme every 3 seconds
  useEffect(() => {
    const styles: AvatarStyle[] = ['cyber-dev', 'memoji', 'hologram', 'minimal-vector'];
    const timer = setInterval(() => {
      setAvatarStyle((current) => {
        const nextIdx = (styles.indexOf(current) + 1) % styles.length;
        return styles[nextIdx];
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const cycleAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    const styles: AvatarStyle[] = ['cyber-dev', 'memoji', 'hologram', 'minimal-vector'];
    const nextIdx = (styles.indexOf(avatarStyle) + 1) % styles.length;
    setAvatarStyle(styles[nextIdx]);
  };

  const dimensionClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-32 h-32 sm:w-36 sm:h-36',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
  }[size];

  return (
    <div 
      className="relative flex flex-col items-center group cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={cycleAvatar}
      title="Click to switch avatar theme"
    >
      {/* Outer Multi-layered Radiant Nebula */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: isHovered ? 1.15 : [1, 1.06, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-purple-600 via-violet-500 to-fuchsia-600 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"
      />

      {/* Orbiting Micro Badges */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-6 sm:-inset-8 pointer-events-none hidden sm:block"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#1A0C38] border border-purple-400/80 shadow-[0_0_12px_#a855f7] flex items-center justify-center text-[10px] text-purple-200">
          ⚛️
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-[#1A0C38] border border-indigo-400/80 shadow-[0_0_12px_#818cf8] flex items-center justify-center text-[10px] text-indigo-200">
          📱
        </div>
      </motion.div>

      {/* Main Avatar Outer Frame */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`relative ${dimensionClasses} rounded-full p-[2.5px] bg-gradient-to-b from-purple-300 via-violet-600 to-indigo-800 shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center justify-center bg-[#0E0824] z-10`}
      >
        <div className="w-full h-full rounded-full bg-[#10072B] relative flex flex-col items-center justify-center overflow-hidden border border-purple-500/30">
          
          {/* Subtle Cyber Grid in Avatar */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{ 
              backgroundImage: 'radial-gradient(rgba(168,85,247,0.8) 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          <AnimatePresence mode="wait">
            {/* Style 1: Modern Cyber Dev (Default) */}
            {avatarStyle === 'cyber-dev' && (
              <motion.div
                key="cyber-dev"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col items-center justify-center relative z-10"
              >
                {/* Visual Dev Silhouette with Neon Visor & Headset */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-purple-500/80 via-violet-600/90 to-indigo-900 flex items-center justify-center shadow-lg border border-purple-400/40 relative overflow-hidden">
                    {/* Glowing VR/Developer Glasses */}
                    <div className="w-12 sm:w-14 h-4 rounded-full bg-cyan-400/90 shadow-[0_0_15px_#22d3ee] flex items-center justify-around px-1 z-10 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    {/* Headset bar */}
                    <div className="absolute top-2 inset-x-2 h-1 bg-purple-300/40 rounded-full" />
                    {/* Code glyph */}
                    <div className="absolute bottom-1 font-mono text-[9px] text-purple-200/90 font-bold tracking-tighter">
                      &lt;DEV /&gt;
                    </div>
                  </div>
                </div>

                {/* Laptop bottom bar */}
                <div className="w-20 sm:w-24 h-2.5 bg-gradient-to-r from-purple-800 via-indigo-600 to-purple-800 rounded-b-md shadow-md mt-1 border-t border-purple-400/60 flex items-center justify-center">
                  <span className="w-2 h-0.5 bg-purple-200 rounded-full" />
                </div>
              </motion.div>
            )}

            {/* Style 2: Apple Memoji Style */}
            {avatarStyle === 'memoji' && (
              <motion.div
                key="memoji"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col items-center justify-center relative z-10"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-purple-400 to-violet-700 flex items-center justify-center shadow-inner relative z-10">
                  <span className="text-3xl sm:text-4xl select-none">👨‍💻</span>
                </div>
                <div className="w-16 h-2 bg-gradient-to-r from-slate-400 to-slate-200 rounded-b-sm shadow-md mt-0.5 flex items-center justify-center">
                  <span className="w-2 h-0.5 bg-slate-600 rounded-full" />
                </div>
              </motion.div>
            )}

            {/* Style 3: Holographic Code Core */}
            {avatarStyle === 'hologram' && (
              <motion.div
                key="hologram"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col items-center justify-center relative z-10 font-mono"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#170B38] border border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center p-2 text-cyan-300">
                  <Terminal className="w-6 h-6 text-cyan-400 animate-pulse mb-1" />
                  <span className="text-[9px] font-bold tracking-widest text-purple-200">TS // REACT</span>
                </div>
              </motion.div>
            )}

            {/* Style 4: Minimal Vector Monogram */}
            {avatarStyle === 'minimal-vector' && (
              <motion.div
                key="minimal-vector"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col items-center justify-center relative z-10 font-mono"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-700 via-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg text-white font-extrabold text-2xl">
                  <span>TD</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick theme switcher hover pill */}
          <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-purple-900/60 hover:bg-purple-700 text-purple-300 text-[9px] z-20">
            <RefreshCw className="w-2.5 h-2.5 group-hover:rotate-180 transition-transform duration-300" />
          </div>

        </div>
      </motion.div>

      {/* Floating Status & Stack Badge */}
      {showBadge && (
        <div className="mt-3 relative z-20 flex flex-col items-center gap-1">
          <div className="px-3 py-0.5 rounded-full bg-[#160A36]/95 border border-purple-500/50 text-[10px] font-mono text-purple-200 flex items-center gap-1.5 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">React.js • React Native • Next.js</span>
          </div>
        </div>
      )}
    </div>
  );
};
