import React, { useState, useEffect } from 'react';
import {
  Home, User, Code, Briefcase, FileText, Mail,
  Menu, X, Sun, Moon
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Resume', href: '#resume', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleSectionHighlight = () => {
      const current = navItems.find(item => {
        const section = document.getElementById(item.href.slice(1));
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActive(current.href.slice(1));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionHighlight);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionHighlight);
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700'
        : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Placeholder for logo/empty space */}
          <div className="w-24" />

          {/* Desktop Nav */}
          <div className="hidden space-x-6 lg:flex">
            {navItems.map(({ name, href, icon: Icon }) => {
              const isActive = active === href.slice(1);
              return (
                <button
                  key={name}
                  onClick={() => scrollTo(href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/20 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={16} />
                  {name}
                </button>
              );
            })}
          </div>

          {/* Theme toggle and mobile menu toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 transition-all duration-300 bg-gray-200 rounded-full hover:scale-110 dark:bg-gray-700"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 bg-gray-200 rounded-full lg:hidden dark:bg-gray-700"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="px-4 py-4 space-y-2 transition-all duration-500 bg-white border-t border-gray-200 lg:hidden dark:bg-gray-900 dark:border-gray-700">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={name}
                onClick={() => scrollTo(href)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium transition ${
                  isActive
                    ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800'
                }`}
              >
                <Icon size={18} />
                {name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
