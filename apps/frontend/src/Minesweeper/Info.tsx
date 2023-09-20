import React from 'react';
import { Modal } from './Modal';

export const Info = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>Info</>
    </Modal>
  );
};
