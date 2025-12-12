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
        <CheckCircle size={64} className="text-semantic-success mx-auto mb-4" />
        <h2 className="text-2xl font-light uppercase tracking-wider text-black mb-4">
          Message Sent
        </h2>
        <p className="text-sm text-neutral-500 mb-8">
          Thank you for reaching out! I'll get back to you as soon as possible.
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

