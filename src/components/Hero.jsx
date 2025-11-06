import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient/vignette overlays that don't block the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs md:text-sm backdrop-blur">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Sanskar Dhiman
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
          Full‑stack developer crafting modern, playful interfaces and scalable backends. I build with JavaScript, React, Express, MongoDB, and Java.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-black font-medium px-5 py-3 transition-colors"
          >
            View Projects <ArrowRight className="size-4" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-3 transition-colors"
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-3 transition-colors"
            >
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
