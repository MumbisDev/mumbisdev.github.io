'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/lib/types';
import { projects } from '@/lib/data';

export function useProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getProjectById = (id: string): Project | undefined => {
    return projects.find((p) => p.id === id);
  };

  return {
    projects: filteredProjects,
    allProjects: projects,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    viewMode,
    setViewMode,
    getProjectById,
  };
}

