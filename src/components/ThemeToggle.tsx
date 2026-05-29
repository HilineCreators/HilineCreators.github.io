import { useState, useEffect } from "react";

const BlackHatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Fedora-style black hat */}
    <ellipse cx="12" cy="18" rx="10" ry="3" fill="currentColor" opacity="0.9" />
    <path d="M6 18 C6 12, 8 7, 12 5 C16 7, 18 12, 18 18" fill="currentColor" />
    <ellipse cx="12" cy="18" rx="10" ry="2.5" fill="currentColor" />
    <path d="M8 14 C9 13.5, 11 13, 12 13 C13 13, 15 13.5, 16 14" stroke="hsl(var(--cyber-lime))" strokeWidth="0.8" fill="none" />
  </svg>
);

const WhiteHatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* White cowboy/western hat */}
    <ellipse cx="12" cy="18" rx="10" ry="3" fill="currentColor" opacity="0.9" />
    <path d="M6 18 C6 14, 7 10, 9 8 C10 11, 14 11, 15 8 C17 10, 18 14, 18 18" fill="currentColor" />
    <ellipse cx="12" cy="18" rx="10" ry="2.5" fill="currentColor" />
    <path d="M8 14 C9 13.5, 11 13, 12 13 C13 13, 15 13.5, 16 14" stroke="hsl(var(--neon-cobalt))" strokeWidth="0.8" fill="none" />
  </svg>
);

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
      title={isDark ? "Switch to White Hat mode" : "Switch to Black Hat mode"}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        >
          <BlackHatIcon className="w-5 h-5 text-foreground" />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            !isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-50"
          }`}
        >
          <WhiteHatIcon className="w-5 h-5 text-foreground" />
        </div>
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
        {isDark ? "Black Hat" : "Day Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
