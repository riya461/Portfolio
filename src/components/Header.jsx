import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#work-experience' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#connect' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0, rotate: -2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav className={`max-w-3xl mx-auto transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sketchy border-2.5 border-charcoal' : 'bg-cream border-2 border-charcoal/80'
      } rounded-full`}>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center justify-center gap-1 font-body text-xs font-semibold uppercase tracking-wider px-2 py-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-300 block ${
                    isActive
                      ? 'bg-coral text-white shadow-sketchy-sm'
                      : 'text-charcoal/60 hover:text-charcoal hover:bg-peach/30'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile: title + hamburger */}
        <div className="flex md:hidden items-center justify-between px-4 py-2">
          <a href="#home" className="font-display font-bold text-sm text-charcoal">RS ✦</a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-charcoal rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-charcoal rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-charcoal rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-3xl mx-auto mt-2 bg-cream border-2 border-charcoal rounded-2xl shadow-sketchy overflow-hidden"
          >
            <ul className="flex flex-col p-2 gap-0.5 font-body text-sm font-semibold uppercase tracking-wider">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className={`block px-4 py-2.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-coral text-white'
                          : 'text-charcoal/60 hover:text-charcoal hover:bg-peach/30'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
