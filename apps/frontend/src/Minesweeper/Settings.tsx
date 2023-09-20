import React from 'react';
import { Modal } from './Modal';

export const Settings = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>Settings</>
    </Modal>
  );
};
