import React from 'react';
import { Modal } from './Modal';

export const Stats = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>Stats</>
    </Modal>
  );
};
