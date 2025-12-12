'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { projects, personalInfo } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-r from-black/30 to-black/10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/banner.png"
            alt="Banner"
            fill
            className="object-cover w-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-container mx-auto px-6 text-center -mt-20"
        >
          <h1 className="text-white text-5xl md:text-6xl font-light uppercase tracking-wider mb-4 drop-shadow-lg">
            {personalInfo.name}
          </h1>
          <p className="text-white text-lg md:text-xl font-light tracking-wider mb-8">
            {personalInfo.title}
          </p>
          <div className="flex gap-4 justify-center mt-5">
            <Link href="/projects">
              <Button variant="primary">View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="bg-white !text-black hover:bg-neutral-100 dark:!bg-white dark:!text-black dark:hover:bg-neutral-100">
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-3xl">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="mb-6">About</h2>
            <p className="text-body mb-4">{personalInfo.bio}</p>
            <Link href="/about">
              <Button variant="primary" className="dark:bg-white dark:text-black dark:hover:bg-neutral-100">Learn More</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-3xl bg-neutral-100">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card href={`/projects/${project.id}`} className="h-full flex flex-col">
                    <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-caption text-neutral-500 uppercase tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-sm font-normal uppercase tracking-wider mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-neutral-500 uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/projects">
                <Button variant="secondary">View All Projects</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

