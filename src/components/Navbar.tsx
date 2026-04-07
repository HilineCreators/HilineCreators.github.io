import { useState, useEffect } from "react";
import { Menu, X, Github, BookOpen } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Threats", href: "#owasp" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-background/90 border-b border-border/30" : "bg-background"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-5 max-w-7xl mx-auto">
          <a href="https://www.hilinecreators.com/" className="font-display text-xl md:text-2xl font-extrabold text-foreground tracking-wider">
            Hiline <span className="text-primary">Creators</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {l.label}
              </button>
            ))}
            <div className="w-px h-4 bg-border/50" />
            <ThemeToggle />
            <a href="https://github.com/Hariprasad-ka/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="http://blog.hilinecreators.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <BookOpen className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/20 px-5 pb-4">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="block w-full text-left py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <ThemeToggle />
              <a href="https://github.com/Hariprasad-ka/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="w-4 h-4" />
              </a>
              <a href="http://blog.hilinecreators.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
