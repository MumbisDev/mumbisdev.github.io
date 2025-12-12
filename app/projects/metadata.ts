import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: `Projects - ${personalInfo.name}`,
  description: `View my portfolio of projects including web applications, mobile apps, and more.`,
};

