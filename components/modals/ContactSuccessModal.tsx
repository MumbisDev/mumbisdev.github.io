'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ContactSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactSuccessModal: React.FC<ContactSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleReturnHome = () => {
    onClose();
    router.push('/');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        {/* Success icon with decorative elements */}
        <div className="relative inline-block mb-6">
          <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-accent-gold/30" />
          <CheckCircle size={64} className="text-semantic-success relative z-10" />
        </div>
        
        <h2 className="font-display text-3xl text-brutal-cream mb-4 tracking-wider">
          Message Sent
        </h2>
        <p className="text-brutal-paper mb-8">
          Thank you for reaching out! I&apos;ll get back to you as soon as possible.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button variant="primary" onClick={handleReturnHome}>
            Return Home
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};
