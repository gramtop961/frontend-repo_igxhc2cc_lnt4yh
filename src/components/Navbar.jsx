import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl">Sanskar Dhiman</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="text-gray-700 hover:text-black transition-colors">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-black transition-colors">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-black transition-colors">Experience</a>
          <a href="mailto:sanskar@example.com" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors">
            <Mail className="size-4" /> Contact
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black"><Github className="size-5" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black"><Linkedin className="size-5" /></a>
        </nav>
        <button className="md:hidden p-2 rounded-md border border-black/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="size-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="max-w-6xl mx-auto px-6 py-4 grid gap-3">
            <a href="#projects" className="text-gray-800">Projects</a>
            <a href="#skills" className="text-gray-800">Skills</a>
            <a href="#experience" className="text-gray-800">Experience</a>
            <a href="mailto:sanskar@example.com" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 w-max">
              <Mail className="size-4" /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
