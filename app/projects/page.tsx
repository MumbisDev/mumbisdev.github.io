'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Grid, List } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useProjects } from '@/hooks/useProjects';

export default function ProjectsPage() {
  const {
    projects,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    viewMode,
    setViewMode,
  } = useProjects();

  return (
    <div className="py-3xl">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-12">Projects</h1>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 border ${
                    viewMode === 'grid'
                      ? 'bg-black text-white border-black'
                      : 'border-neutral-300 text-black hover:border-black'
                  } transition-colors`}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 border ${
                    viewMode === 'list'
                      ? 'bg-black text-white border-black'
                      : 'border-neutral-300 text-black hover:border-black'
                  } transition-colors`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-normal uppercase tracking-wider border transition-colors ${
                    selectedCategory === category
                      ? 'bg-black text-white border-black'
                      : 'bg-transparent text-black border-neutral-300 hover:border-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid/List */}
          {projects.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                  : 'space-y-6'
              }
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="h-full"
                >
                  <Card href={`/projects/${project.id}`} className="h-full flex flex-col">
                    {viewMode === 'grid' ? (
                      <>
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
                      </>
                    ) : (
                      <div className="flex flex-col md:flex-row gap-6 p-6">
                        <div className="w-full md:w-64 aspect-square bg-neutral-100 overflow-hidden relative flex-shrink-0">
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-contain transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-caption text-neutral-500 uppercase tracking-wider mb-1">
                            {project.category}
                          </p>
                          <h3 className="text-lg font-normal uppercase tracking-wider mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-neutral-500 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs text-neutral-500 uppercase tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-neutral-100 py-16 px-8 text-center">
              <p className="text-base font-normal uppercase tracking-wider text-black mb-2">
                No Projects Found
              </p>
              <p className="text-sm text-neutral-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
