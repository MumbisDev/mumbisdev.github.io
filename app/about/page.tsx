'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skills, workExperience, education, personalInfo } from '@/lib/data';

export default function AboutPage() {
  const skillCategories = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
    design: skills.filter((s) => s.category === 'design'),
  };

  return (
    <div className="py-3xl">
      <div className="max-w-container mx-auto px-6">
        {/* Biography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3xl"
        >
          <h1 className="mb-6">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden relative">
              <Image
                src="/me.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-body mb-4">{personalInfo.bio}</p>
              <p className="text-body mb-4">
                My journey through App Academy's intensive coding bootcamp provided me with a strong
                foundation in both frontend and backend technologies. I've embraced modern development
                tools like Cursor to enhance my productivity and deliver high-quality code efficiently.
              </p>
              <p className="text-body">
                I'm passionate about creating beautiful, functional, and user-friendly applications
                that solve real-world problems. When I'm not coding, I enjoy 3D printing and finishing
                resin models, playing piano, and reading philosophy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3xl"
        >
          <h2 className="mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-sm font-normal uppercase tracking-wider mb-4">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 border border-neutral-300 text-sm uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3xl"
        >
          <h2 className="mb-8">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="border-l-2 border-black pl-6"
              >
                <div className="mb-2">
                  <h3 className="text-lg font-normal uppercase tracking-wider mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
                    {exp.company}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {new Date(exp.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    -{' '}
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })
                      : 'Present'}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-500 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-black pl-6">
                <h3 className="text-lg font-normal uppercase tracking-wider mb-1">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs text-neutral-500 mb-2">
                  {new Date(edu.startDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  -{' '}
                  {new Date(edu.endDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
                {edu.description && (
                  <p className="text-sm text-neutral-500">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

