import React from 'react'
import Modal from 'react-modal';
import styles from "@/styles/ProductService/product-service.module.scss";

interface ModalProductServiceProps {
  modalIsOpen: boolean
  setModalIsOpen: (isOpen: boolean) => void
  children?: React.ReactNode
}

const ModalProductService: React.FC<ModalProductServiceProps> = ({ modalIsOpen, setModalIsOpen, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.close} onClick={() => setModalIsOpen(false)}>×</button>
      {children}

      asd
    </Modal>
  )
}

export default ModalProductService