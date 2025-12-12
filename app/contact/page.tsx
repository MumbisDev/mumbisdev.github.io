'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { ContactSuccessModal } from '@/components/modals/ContactSuccessModal';
import { useContactForm } from '@/hooks/useContactForm';
import { personalInfo } from '@/lib/data';

export default function ContactPage() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    resetSuccess,
  } = useContactForm();

  return (
    <>
      <div className="py-3xl">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-body text-neutral-500 mb-12">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always
              open to discussing new opportunities and interesting projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                    required
                  />
                  <Textarea
                    label="Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    error={errors.message}
                    required
                  />
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wider text-neutral-500 mb-2">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm flex items-center gap-2 hover:text-neutral-600 transition-colors"
                    >
                      <Mail size={16} />
                      {personalInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wider text-neutral-500 mb-2">
                      Location
                    </p>
                    <p className="text-sm">{personalInfo.location}</p>
                  </div>
                  <div>
                    <p className="text-xs font-normal uppercase tracking-wider text-neutral-500 mb-4">
                      Social Links
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={personalInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-accent-blue transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={personalInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-accent-blue transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={personalInfo.socialLinks.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-accent-blue transition-colors"
                        aria-label="X"
                      >
                        <X size={20} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <a
                      href={personalInfo.resumeUrl}
                      download="Zildjian_Crumpton_Resume.pdf"
                      className="inline-block"
                    >
                      <Button variant="secondary" className="flex items-center gap-2">
                        <Download size={16} />
                        Download Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactSuccessModal isOpen={isSuccess} onClose={resetSuccess} />
    </>
  );
}

