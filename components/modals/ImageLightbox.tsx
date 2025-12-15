'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      window.addEventListener('keydown', handleArrowKeys);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleArrowKeys);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-center justify-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 border-2 md:border-3 border-brutal-ink bg-black/50 md:bg-transparent flex items-center justify-center 
                     text-brutal-cream hover:border-accent-cyan hover:text-accent-cyan transition-colors z-[80]"
          aria-label="Close lightbox"
        >
          <X size={20} className="md:hidden" />
          <X size={24} className="hidden md:block" />
        </button>

        {/* Navigation buttons - hidden on mobile, shown on md+ */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 border-3 border-brutal-ink items-center justify-center 
                         text-brutal-cream hover:border-accent-cyan hover:text-accent-cyan 
                         hover:shadow-brutal-cyan hover:-translate-x-1 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 border-3 border-brutal-ink items-center justify-center 
                         text-brutal-cream hover:border-accent-cyan hover:text-accent-cyan 
                         hover:shadow-brutal-cyan hover:translate-x-1 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        {/* Mobile navigation buttons - bottom positioned */}
        {images.length > 1 && (
          <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="w-12 h-12 border-2 border-brutal-ink bg-black/50 flex items-center justify-center 
                         text-brutal-cream active:border-accent-cyan active:text-accent-cyan transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="w-12 h-12 border-2 border-brutal-ink bg-black/50 flex items-center justify-center 
                         text-brutal-cream active:border-accent-cyan active:text-accent-cyan transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          onClick={(e) => {
            e.stopPropagation();
            // Only enable click-to-navigate on desktop
            if (images.length > 1 && window.innerWidth >= 768) {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const containerWidth = rect.width;
              const midpoint = containerWidth / 2;
              
              if (clickX < midpoint) {
                onPrevious();
              } else {
                onNext();
              }
            }
          }}
          className="relative max-w-7xl max-h-[70vh] md:max-h-[85vh] w-full flex items-center justify-center px-2 py-16 md:p-4 cursor-pointer"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[60vh] md:max-h-full object-contain pointer-events-none mx-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 md:gap-4">
            <div className="flex gap-1.5 md:gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 transition-colors ${
                    index === currentIndex ? 'bg-accent-cyan' : 'bg-brutal-ink'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs md:text-sm text-brutal-stone">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
