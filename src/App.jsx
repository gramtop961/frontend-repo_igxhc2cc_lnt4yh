import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Sanskar Dhiman. All rights reserved.</span>
          <a href="#home" className="text-gray-600 hover:text-gray-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
