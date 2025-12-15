'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { projects, personalInfo } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section - Brutalist Asymmetric */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-[6px] border-accent-vermillion/20" />
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(45,45,45,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(45,45,45,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
          {/* Diagonal accent */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brutal-black to-transparent" />
        </div>

        {/* Banner Image with brutalist treatment */}
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
          <div className="relative w-full h-full">
            <Image
              src="/banner.png"
              alt="Banner"
              fill
              className="object-cover opacity-30 md:opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brutal-black via-brutal-black/80 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="container-brutal relative z-10">
          <div className="max-w-3xl">
            {/* Main heading with stagger */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                className="text-brutal-cream leading-[0.9]"
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {word}
                    {i === 0 && <span className="text-accent-cyan">.</span>}
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Title with accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-accent-cyan" />
                <span className="font-display text-xl text-brutal-stone tracking-widest">
                  {personalInfo.title}
                </span>
              </div>
              <p className="text-brutal-paper text-lg max-w-xl leading-relaxed font-body">
                Building digital experiences with raw authenticity and precise craftsmanship.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button variant="primary">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary">Get In Touch</Button>
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-brutal-stone tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-8 bg-gradient-to-b from-accent-cyan to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-4xl bg-brutal-charcoal relative">
        {/* Geometric accent */}
        <div className="absolute top-0 right-0 w-48 h-48 border-4 border-accent-gold/20" />
        
        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="brutal-label mb-4 block">About Me</span>
              <h2 className="text-brutal-cream mb-6">
                Crafting<br />
                <span className="text-accent-cyan">Digital</span><br />
                Experiences
              </h2>
              <p className="text-brutal-paper text-lg mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>
              <Link href="/about">
                <Button variant="secondary">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Decorative element */}
            <div className="relative hidden lg:block">
              <div className="aspect-square relative">
                <div className="absolute inset-0 border-4 border-brutal-cream" />
                <div className="absolute inset-4 border-4 border-accent-cyan" />
                <div className="absolute inset-8 border-4 border-accent-gold" />
                <div className="absolute inset-12 bg-brutal-ink flex items-center justify-center">
                  <span className="font-display text-4xl text-brutal-cream">CREATE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-4xl bg-brutal-black relative">
        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <span className="brutal-label mb-4 block">Selected Work</span>
              <h2 className="text-brutal-cream">
                Featured<br />
                <span className="text-stroke text-accent-cyan">Projects</span>
              </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <Link href="/projects">
                  <span className="font-display text-lg text-brutal-cream hover:text-accent-vermillion transition-colors flex items-center gap-2">
                    View All
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="h-full"
                >
                  <Card href={`/projects/${project.id}`} className="h-full flex flex-col overflow-hidden">
                    {/* Image container */}
                    <div className="aspect-[4/3] bg-brutal-ink overflow-hidden relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-accent-cyan/0 group-hover:bg-accent-cyan/10 transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow border-t-3 border-accent-cyan">
                      <span className="brutal-label mb-2">{project.category}</span>
                      <h3 className="text-xl text-brutal-cream mb-3 group-hover:text-accent-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-brutal-stone text-sm mb-4 flex-grow line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono text-brutal-stone border border-brutal-ink"
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
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-4xl bg-accent-cyan relative overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full border-[8px] border-brutal-black" />
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 border-[8px] border-brutal-black" />
          </div>
        </div>

        <div className="container-brutal relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-brutal-black mb-6">
              Let&apos;s Work<br />Together
            </h2>
            <p className="text-brutal-black/80 text-lg mb-8 font-body">
              Have a project in mind? I&apos;m always open to discussing new opportunities 
              and interesting collaborations.
            </p>
            <Link href="/contact">
              <Button 
                variant="secondary" 
                className="!bg-brutal-black !text-brutal-cream !border-brutal-black hover:!bg-brutal-cream hover:!text-brutal-black hover:!border-brutal-cream"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
