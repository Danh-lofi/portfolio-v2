import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'expertise', 'experience', 'projects', 'domains', 'skills', 'contact'];
      const currentPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Domains', href: '#domains', id: 'domains' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A]/80 py-3.5 shadow-sm shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 text-[#FAFAFA] font-bold text-lg tracking-tight focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#111113] border border-[#27272A] flex items-center justify-center text-cyan-400 font-mono text-sm font-semibold group-hover:border-cyan-500/50 transition-colors">
            D
          </div>
          <span className="font-bold text-base tracking-tight">
            Danh<span className="text-cyan-500">.</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#111113] border border-[#27272A] text-[#A1A1AA] font-normal">
            Frontend Eng
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111113]/80 border border-[#27272A] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive 
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 font-semibold' 
                    : 'text-[#A1A1AA] hover:text-cyan-400'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#FAFAFA] hover:bg-cyan-400 text-[#09090B] text-xs font-semibold transition-all duration-150 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
          
          <a
            id="nav-contact-cta"
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#111113] hover:border-cyan-500/50 border border-[#27272A] text-[#FAFAFA] hover:text-cyan-400 text-xs font-medium transition-colors duration-150 shadow-sm"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-zinc-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090B] border-b border-[#27272A] px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-cyan-500/50"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FAFAFA] hover:bg-cyan-400 text-[#09090B] text-sm font-semibold transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#111113] border border-[#27272A] text-white text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
