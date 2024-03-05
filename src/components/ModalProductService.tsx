import React, { useState } from 'react'
import Modal from 'react-modal';
import styles from "@/styles/ProductService/product-service.module.scss";

Modal.setAppElement('#__next');

interface ModalProductServiceProps {
  modalIsOpen: boolean
  setModalIsOpen: (isOpen: boolean) => void
  children?: React.ReactNode
}

const ModalProductService: React.FC<ModalProductServiceProps> = ({ modalIsOpen, setModalIsOpen, children }) => {

  return (
    <Modal isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className={styles.modalContent}
      overlayClassName={styles.overlay}
    >
      {children}
    </Modal>
  )
}

export default ModalProductService