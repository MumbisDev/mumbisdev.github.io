'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, X, MapPin } from 'lucide-react';
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
      <div className="bg-brutal-black min-h-screen">
        {/* Hero */}
        <section className="py-4xl relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute top-20 right-20 w-64 h-64 border-4 border-accent-cyan/20 rotate-12" />
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-gold/10" />

          <div className="container-brutal">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="mb-16">
                <span className="brutal-label mb-4 block">Get In Touch</span>
              <h1 className="text-brutal-cream mb-6">
                Contact<span className="text-accent-cyan">.</span>
              </h1>
                <p className="text-brutal-paper text-xl max-w-2xl">
                  Have a project in mind or want to collaborate? Want your website to be designed like this one? Feel free to reach out. 
                  I&apos;m always open to discussing new opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-1 bg-accent-cyan" />
                    <h2 className="text-2xl text-brutal-cream">Send a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      error={errors.name}
                      placeholder="Your name"
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="your@email.com"
                      required
                    />
                    <Textarea
                      label="Message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      error={errors.message}
                      placeholder="Tell me about your project..."
                      required
                    />
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-1 bg-accent-gold" />
                    <h2 className="text-2xl text-brutal-cream">Contact Info</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Email */}
                    <div className="bg-brutal-charcoal p-6 border-l-4 border-accent-cyan">
                      <span className="brutal-label mb-2 block">Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="flex items-center gap-3 text-brutal-cream hover:text-accent-cyan transition-colors text-lg"
                      >
                        <Mail size={20} />
                        {personalInfo.email}
                      </a>
                    </div>

                    {/* Location */}
                    <div className="bg-brutal-charcoal p-6 border-l-4 border-accent-gold">
                      <span className="brutal-label mb-2 block">Location</span>
                      <p className="flex items-center gap-3 text-brutal-cream text-lg">
                        <MapPin size={20} />
                        {personalInfo.location}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div>
                      <span className="brutal-label mb-4 block">Connect</span>
                      <div className="flex gap-4">
                        <a
                          href={personalInfo.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 border-3 border-brutal-ink flex items-center justify-center text-brutal-cream 
                                     hover:border-accent-cyan hover:text-accent-cyan hover:shadow-brutal-cyan
                                     hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                          aria-label="GitHub"
                        >
                          <Github size={24} />
                        </a>
                        <a
                          href={personalInfo.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 border-3 border-brutal-ink flex items-center justify-center text-brutal-cream 
                                     hover:border-accent-gold hover:text-accent-gold hover:shadow-brutal-gold
                                     hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={24} />
                        </a>
                        <a
                          href={personalInfo.socialLinks.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 border-3 border-brutal-ink flex items-center justify-center text-brutal-cream 
                                     hover:border-accent-cyan hover:text-accent-cyan hover:shadow-brutal-cyan
                                     hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                          aria-label="X"
                        >
                          <X size={24} />
                        </a>
                      </div>
                    </div>

                    {/* Resume Download */}
                    <div className="pt-8 border-t border-brutal-ink">
                      <a
                        href={personalInfo.resumeUrl}
                        download="Zildjian_Crumpton_Resume.pdf"
                        className="inline-block"
                      >
                        <Button variant="secondary" className="flex items-center gap-3">
                          <Download size={18} />
                          Download Resume
                        </Button>
                      </a>
                    </div>
                  </div>

                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <ContactSuccessModal isOpen={isSuccess} onClose={resetSuccess} />
    </>
  );
}
