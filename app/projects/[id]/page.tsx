'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ImageLightbox } from '@/components/modals/ImageLightbox';
import { useProjects } from '@/hooks/useProjects';

export default function ProjectDetailPage() {
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
      <div className="py-3xl">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <h1 className="mb-4">{project.title}</h1>
            <p className="text-body text-neutral-500 mb-8">{project.description}</p>

            {/* Main Image */}
            <div className="mb-8">
              <div className="aspect-square bg-neutral-100 overflow-hidden relative cursor-pointer">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-contain"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-2 mb-8">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className="w-[60px] h-[60px] border border-neutral-200 cursor-pointer hover:border-black transition-colors relative overflow-hidden"
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

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <h2 className="mb-4">Description</h2>
                <p className="text-body mb-6">{project.longDescription}</p>

                {project.challenges && (
                  <>
                    <h3 className="mb-3">Challenges</h3>
                    <p className="text-body mb-6">{project.challenges}</p>
                  </>
                )}

                {project.solutions && (
                  <>
                    <h3 className="mb-3">Solutions</h3>
                    <p className="text-body">{project.solutions}</p>
                  </>
                )}
              </div>

              <div>
                <h2 className="mb-4">Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wider text-neutral-500 mb-2">
                      Category
                    </p>
                    <p className="text-sm">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wider text-neutral-500 mb-2">
                      Year
                    </p>
                    <p className="text-sm">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wider text-neutral-500 mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border border-neutral-300 text-xs uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-4">
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

