import React from 'react';
import { ExternalLink } from 'lucide-react';

const demoProjects = [
  {
    title: 'Interactive Portfolio 3D',
    description: 'A playful, modern developer portfolio leveraging a Spline 3D scene and smooth interactions.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'REST API with Express',
    description: 'Production‑ready RESTful API with authentication, validations, and MongoDB.',
    tags: ['Express', 'MongoDB', 'JWT'],
    link: '#',
  },
  {
    title: 'Realtime Chat',
    description: 'Socket‑powered chat with rooms, presence, and message persistence.',
    tags: ['React', 'Node', 'Socket.io'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Projects</h2>
            <p className="mt-2 text-gray-600">Selected work that blends design and engineering.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-5 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View <ExternalLink className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
