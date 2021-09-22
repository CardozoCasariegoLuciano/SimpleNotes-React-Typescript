import { useState } from "react";

type Ialert = {
  isVisible: boolean;
  text: string;
};

export const useShowAlert = () => {
  const [modal, setModal] = useState<Ialert>({
    isVisible: false,
    text: "",
  });

  const showModal = (value: string):void => {
    setModal({ isVisible: true, text: value });
    setTimeout(() => {
      setModal({ isVisible: false, text: "" });
    }, 5500);
  };

  return [showModal, modal.text, modal.isVisible] as const;
};
