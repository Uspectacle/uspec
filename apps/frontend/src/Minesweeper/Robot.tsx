import React from 'react';
import { Modal } from './Modal';

export const Robot = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>Robot</>
    </Modal>
  );
};
