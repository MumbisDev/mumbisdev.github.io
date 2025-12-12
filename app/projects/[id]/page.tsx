import { projects } from '@/lib/data';
import { ProjectDetailClient } from './ProjectDetailClient';

// Generate static params for all projects (required for static export)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}

