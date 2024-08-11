import React, { Dispatch, ReactElement, SetStateAction } from "react";

interface ModalProps {
  children: ReactElement;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  return (
    <div className="Modal_Container  overflow-y-scroll no-scrollbar">
      {showModal ? (
        <div className="bg-grayCool-2">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none h-screen w-screen backdrop-blur-sm">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
