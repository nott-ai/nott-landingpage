import { useState } from "react";

export default function useModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onOpen = () => {
    setModalIsOpen(true);
  };

  const onClose = () => {
    setModalIsOpen(false);
  };

  return { modalIsOpen, onOpen, onClose };
}
