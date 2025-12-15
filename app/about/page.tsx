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
  };

  return (
    <div className="bg-brutal-cream dark:bg-brutal-black">
      {/* Hero Section */}
      <section className="py-4xl relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 border-4 border-accent-cyan/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-accent-gold/10 rounded-full" />

        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-16">
              <span className="brutal-label mb-4 block">Who I Am</span>
              <h1 className="text-brutal-black dark:text-brutal-cream mb-6">
                About<span className="text-accent-cyan">.</span>
              </h1>
            </div>

            {/* Bio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4xl">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[3/4] relative">
                  {/* Frame decorations */}
                  <div className="absolute -top-4 -left-4 w-full h-full border-4 border-accent-cyan" />
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-gold" />
                  
                  <div className="relative w-full h-full overflow-hidden border-4 border-brutal-black dark:border-brutal-cream">
                    <Image
                      src="/me.jpg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <span className="font-display text-2xl text-accent-gold mb-6">BIO</span>
                <p className="text-brutal-charcoal dark:text-brutal-paper text-lg mb-6 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-brutal-charcoal dark:text-brutal-paper text-lg mb-6 leading-relaxed">
                  My journey through App Academy&apos;s intensive coding bootcamp provided me with a strong
                  foundation in both frontend and backend technologies. I&apos;ve embraced modern development
                  tools like Cursor to enhance my productivity and deliver high-quality code efficiently.
                </p>
                <p className="text-brutal-stone text-lg leading-relaxed">
                  When I&apos;m not coding, I enjoy 3D printing and finishing resin models, playing piano, 
                  and reading philosophy.
                </p>

                {/* Location indicator */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent-cyan animate-pulse" />
                  <span className="font-mono text-sm text-brutal-stone">
                    Based in {personalInfo.location}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-4xl bg-brutal-paper dark:bg-brutal-charcoal relative">
        <div className="absolute top-1/2 right-0 vertical-text text-brutal-stone/20 dark:text-brutal-ink text-6xl font-display tracking-widest">
          SKILLS
        </div>

        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="brutal-label mb-4 block">Expertise</span>
            <h2 className="text-brutal-black dark:text-brutal-cream mb-12">
              Skills &<br />
              <span className="text-stroke text-accent-cyan">Technologies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {Object.entries(skillCategories).map(([category, categorySkills], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                  className="relative"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-1 bg-accent-cyan" />
                    <h3 className="text-xl text-brutal-black dark:text-brutal-cream">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 border-2 border-brutal-charcoal dark:border-brutal-ink text-brutal-charcoal dark:text-brutal-paper text-sm font-mono
                                   hover:border-accent-cyan hover:text-accent-cyan
                                   transition-colors duration-200 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-4xl bg-brutal-cream dark:bg-brutal-black relative">
        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="brutal-label mb-4 block">Career</span>
            <h2 className="text-brutal-black dark:text-brutal-cream mb-16">
              Work<br />
              <span className="text-accent-gold">Experience</span>
            </h2>

            <div className="space-y-12">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-8 border-l-4 border-accent-cyan"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[10px] top-0 w-4 h-4 bg-accent-cyan" />

                  <div className="mb-4">
                    <h3 className="text-2xl text-brutal-black dark:text-brutal-cream mb-2">{exp.position}</h3>
                    <p className="font-mono text-accent-gold text-sm mb-1">{exp.company}</p>
                    <p className="font-mono text-brutal-stone text-xs">
                      {new Date(exp.startDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}{' '}
                      —{' '}
                      {exp.endDate
                        ? new Date(exp.endDate).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })
                        : 'Present'}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-brutal-charcoal dark:text-brutal-paper flex items-start gap-3">
                        <span className="text-accent-cyan mt-2">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-brutal-paper dark:bg-brutal-charcoal text-brutal-stone text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-4xl bg-brutal-paper dark:bg-brutal-charcoal">
        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="brutal-label mb-4 block">Learning</span>
            <h2 className="text-brutal-black dark:text-brutal-cream mb-16">
              Education<span className="text-accent-cyan">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-brutal-ink p-8 border-l-4 border-accent-gold"
                >
                  <h3 className="text-xl text-brutal-black dark:text-brutal-cream mb-2">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="font-mono text-accent-gold text-sm mb-2">{edu.institution}</p>
                  <p className="font-mono text-brutal-stone text-xs mb-4">
                    {new Date(edu.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    —{' '}
                    {new Date(edu.endDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                  {edu.description && (
                    <p className="text-brutal-charcoal dark:text-brutal-paper">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
