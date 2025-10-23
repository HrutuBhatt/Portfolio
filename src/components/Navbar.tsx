// import DarkModeToggle from "./ThemeToggle";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center py-4 px-6 shadow-md sticky top-0 bg-white z-50">
//       <h1 className="text-2xl font-bold">Hrutu Bhatt</h1>
//       <ul className="flex gap-6">
//         <li><a href="#about" className="hover:text-blue-500">About</a></li>
//         <li><a href="#about" className="hover:text-blue-500">Skills</a></li>
//         <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
//         <li><a href="#achievements" className="hover:text-blue-500">Achievements</a></li>
//         <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
//         <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
//         {/* <DarkModeToggle /> */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
// import DarkModeToggle from './DarkModeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Smooth scroll for in-page links: optional if html { scroll-behavior: smooth }
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="#hero" onClick={(e)=>handleNavClick(e,'#hero')} className="text-2xl font-bold text-gray-900 dark:text-white">
              Hrutu Bhatt
            </Link> 
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {link.name}
              </a>
            ))}

            <div className="ml-2">
              {/* <DarkModeToggle /> */}
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            <div className="mr-2">
              {/* <DarkModeToggle /> */}
            </div>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="p-2 inline-flex items-center justify-center rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (slide down) */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-[600px]' : 'max-h-0'
        } bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2"
            >
              {link.name}
            </a>
          ))}

          {/* optional quick socials or CTA in mobile menu */}
          <div className="pt-2 border-t border-gray-100 dark:border-slate-800">
            <a
              href="mailto:your.email@example.com"
              className="block text-sm text-gray-700 dark:text-gray-300 hover:underline py-2"
            >
              hrutubhatt04@gmail.com
            </a>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/HrutuBhatt" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">GitHub</a>
              <a href="https://linkedin.com/in/hrutu-bhatt-891095252/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
