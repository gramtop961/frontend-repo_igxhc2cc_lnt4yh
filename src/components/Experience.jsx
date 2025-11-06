import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Experience</h2>
        <div className="mt-8 rounded-2xl border border-black/5 bg-white shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gray-100 p-2">
                <Briefcase className="size-5 text-gray-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">IBM — Technology Engineer Intern</h3>
                <p className="text-sm text-gray-600">Built internal tools and contributed to scalable backend services.</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
