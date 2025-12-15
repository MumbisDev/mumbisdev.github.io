'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ImageLightbox } from '@/components/modals/ImageLightbox';
import { PortfolioShowcase } from '@/components/projects/PortfolioShowcase';
import { useProjects } from '@/hooks/useProjects';

export function ProjectDetailClient() {
  const params = useParams();
  const { getProjectById } = useProjects();
  const project = getProjectById(params.id as string);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) {
    notFound();
  }

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePreviousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <div className="bg-brutal-cream dark:bg-brutal-black min-h-screen py-4xl">
        <div className="container-brutal">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />

          {/* Back link */}
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-brutal-stone hover:text-accent-cyan transition-colors mt-6 mb-8"
          >
            <ArrowLeft size={16} />
            <span className="font-mono text-sm">Back to Projects</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <span className="brutal-label mb-4 block">{project.category}</span>
              <h1 className="text-brutal-black dark:text-brutal-cream mb-4">
                {project.title}<span className="text-accent-cyan">.</span>
              </h1>
              <p className="text-brutal-charcoal dark:text-brutal-paper text-xl max-w-3xl">{project.description}</p>
            </div>

            {/* Main Image or Special Showcase */}
            {project.isMetaProject ? (
              <div className="mb-12">
                <PortfolioShowcase technologies={project.technologies} />
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div 
                    className="aspect-video bg-brutal-paper dark:bg-brutal-charcoal border-4 border-brutal-charcoal dark:border-brutal-ink overflow-hidden relative cursor-pointer group"
                    onClick={() => handleImageClick(0)}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent-cyan/0 group-hover:bg-accent-cyan/10 transition-colors duration-300" />
                  </div>
                </div>

                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`w-24 h-24 border-3 cursor-pointer transition-all duration-200 relative overflow-hidden flex-shrink-0
                          ${index === lightboxIndex 
                            ? 'border-accent-cyan' 
                            : 'border-brutal-charcoal dark:border-brutal-ink hover:border-brutal-black dark:hover:border-brutal-cream'
                          }`}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-1 bg-accent-cyan" />
                    <h2 className="text-2xl text-brutal-black dark:text-brutal-cream">Description</h2>
                  </div>
                  <p className="text-brutal-charcoal dark:text-brutal-paper text-lg leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Challenges */}
                {project.challenges && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-1 bg-accent-gold" />
                      <h2 className="text-2xl text-brutal-black dark:text-brutal-cream">Challenges</h2>
                    </div>
                    <p className="text-brutal-charcoal dark:text-brutal-paper text-lg leading-relaxed">{project.challenges}</p>
                  </div>
                )}

                {/* Solutions */}
                {project.solutions && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-1 bg-accent-cyan" />
                      <h2 className="text-2xl text-brutal-black dark:text-brutal-cream">Solutions</h2>
                    </div>
                    <p className="text-brutal-charcoal dark:text-brutal-paper text-lg leading-relaxed">{project.solutions}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-brutal-paper dark:bg-brutal-charcoal border-3 border-brutal-charcoal dark:border-brutal-ink p-8 sticky top-24">
                  <h2 className="text-xl text-brutal-black dark:text-brutal-cream mb-8">Project Details</h2>
                  
                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <span className="brutal-label block mb-2">Category</span>
                      <p className="text-brutal-black dark:text-brutal-cream">{project.category}</p>
                    </div>

                    {/* Year */}
                    <div>
                      <span className="brutal-label block mb-2">Year</span>
                      <p className="text-brutal-black dark:text-brutal-cream font-mono">{project.year}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <span className="brutal-label block mb-3">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 border-2 border-brutal-charcoal dark:border-brutal-ink text-brutal-stone text-xs font-mono
                                       hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-6 border-t border-brutal-stone/30 dark:border-brutal-ink">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                            <ExternalLink size={16} />
                            Live Demo
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                            <Github size={16} />
                            View Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ImageLightbox
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
      />
    </>
  );
}
