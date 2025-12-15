'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Grid, List, Monitor } from 'lucide-react';
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
    <div className="bg-brutal-cream dark:bg-brutal-black min-h-screen">
      <section className="py-4xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 border-4 border-accent-cyan/10 rotate-45" />

        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-16">
              <span className="brutal-label mb-4 block">Selected Work</span>
              <h1 className="text-brutal-black dark:text-brutal-cream mb-6">
                Projects<span className="text-accent-cyan">.</span>
              </h1>
            </div>

            {/* Filters and Search */}
            <div className="mb-12 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-1 max-w-md">
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                {/* View mode toggles */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 border-3 transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-accent-cyan text-brutal-black border-accent-cyan'
                        : 'border-brutal-charcoal dark:border-brutal-ink text-brutal-stone hover:border-brutal-black dark:hover:border-brutal-cream hover:text-brutal-black dark:hover:text-brutal-cream'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 border-3 transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-accent-cyan text-brutal-black border-accent-cyan'
                        : 'border-brutal-charcoal dark:border-brutal-ink text-brutal-stone hover:border-brutal-black dark:hover:border-brutal-cream hover:text-brutal-black dark:hover:text-brutal-cream'
                    }`}
                    aria-label="List view"
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 font-display text-sm tracking-wider border-3 transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-accent-cyan text-brutal-black border-accent-cyan'
                        : 'bg-transparent text-brutal-stone border-brutal-charcoal dark:border-brutal-ink hover:border-brutal-black dark:hover:border-brutal-cream hover:text-brutal-black dark:hover:text-brutal-cream'
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
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-8'
                }
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card href={`/projects/${project.id}`} className="h-full flex flex-col overflow-hidden">
                      {viewMode === 'grid' ? (
                        <>
                          <div className="aspect-[4/3] bg-brutal-paper dark:bg-brutal-ink overflow-hidden relative">
                            {project.isMetaProject ? (
                              /* Special meta-project display */
                              <div className="absolute inset-0 bg-gradient-to-br from-brutal-charcoal to-brutal-black flex flex-col items-center justify-center p-4">
                                <motion.div
                                  animate={{ 
                                    boxShadow: ['0 0 0 0 rgba(0, 245, 255, 0)', '0 0 0 8px rgba(0, 245, 255, 0.3)', '0 0 0 0 rgba(0, 245, 255, 0)']
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="w-16 h-16 border-3 border-accent-cyan flex items-center justify-center mb-3"
                                >
                                  <Monitor className="w-8 h-8 text-accent-cyan" />
                                </motion.div>
                                <div className="flex items-center gap-2 text-accent-gold">
                                  <span className="font-mono text-xs tracking-wider">LIVE NOW</span>
                                </div>
                                {/* Decorative corners */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent-cyan/50" />
                                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent-cyan/50" />
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent-cyan/50" />
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent-cyan/50" />
                              </div>
                            ) : (
                              <>
                                <Image
                                  src={project.images[0]}
                                  alt={project.title}
                                  fill
                                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-accent-cyan/0 group-hover:bg-accent-cyan/10 transition-colors duration-300" />
                              </>
                            )}
                          </div>
                          <div className="p-6 flex flex-col flex-grow border-t-3 border-accent-cyan">
                            <span className="brutal-label mb-2">{project.category}</span>
                            <h3 className="text-xl text-brutal-black dark:text-brutal-cream mb-3 group-hover:text-accent-gold transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-brutal-stone text-sm mb-4 flex-grow line-clamp-2">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs font-mono text-brutal-stone border border-brutal-charcoal dark:border-brutal-ink"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col md:flex-row gap-8 p-6">
                          <div className="w-full md:w-80 aspect-[4/3] overflow-hidden relative flex-shrink-0 border-3 border-brutal-charcoal dark:border-brutal-ink group-hover:border-accent-cyan transition-colors">
                            {project.isMetaProject ? (
                              /* Special meta-project display for list view */
                              <div className="absolute inset-0 bg-gradient-to-br from-brutal-charcoal to-brutal-black flex flex-col items-center justify-center">
                                <motion.div
                                  animate={{ 
                                    boxShadow: ['0 0 0 0 rgba(0, 245, 255, 0)', '0 0 0 8px rgba(0, 245, 255, 0.3)', '0 0 0 0 rgba(0, 245, 255, 0)']
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="w-16 h-16 border-3 border-accent-cyan flex items-center justify-center mb-3"
                                >
                                  <Monitor className="w-8 h-8 text-accent-cyan" />
                                </motion.div>
                                <div className="flex items-center gap-2 text-accent-gold">
                                  <span className="font-mono text-xs tracking-wider">LIVE NOW</span>
                                </div>
                              </div>
                            ) : (
                              <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                              />
                            )}
                          </div>
                          <div className="flex-1 flex flex-col">
                            <span className="brutal-label mb-2">{project.category}</span>
                            <h3 className="text-2xl text-brutal-black dark:text-brutal-cream mb-3 group-hover:text-accent-gold transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-brutal-charcoal dark:text-brutal-paper mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs font-mono text-brutal-stone border border-brutal-charcoal dark:border-brutal-ink"
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-brutal-paper dark:bg-brutal-charcoal border-3 border-brutal-charcoal dark:border-brutal-ink py-20 px-8 text-center"
              >
                <h3 className="text-2xl text-brutal-black dark:text-brutal-cream mb-3">No Projects Found</h3>
                <p className="text-brutal-stone">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
