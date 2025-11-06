import React from 'react';
import { Code2, Database, Server, Layers } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Layers },
  { name: 'Express', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Java', icon: Code2 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Skills</h2>
        <p className="mt-2 text-gray-600">A focused toolkit for building fast, reliable experiences.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="group rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-5 flex items-center gap-3">
                <div className="rounded-lg bg-gray-100 p-2 group-hover:bg-gray-200 transition-colors">
                  <Icon className="size-5 text-gray-800" />
                </div>
                <span className="font-medium text-gray-800">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
