import React from "react";
import { Modal, ModalContent, Close } from "./style";
import FormSignIn from "../FormSignIn";
import FormSignUp from "../FormSignUp";

const ModalComponent = ({
  showModal,
  setShowModal,
  showLoginForm,
  setShowLoginForm,
}) => {
  return (
    <Modal showModal={showModal}>
      <ModalContent>
        <Close onClick={() => setShowModal(false)}>&times;</Close>
        {showLoginForm ? (
          <FormSignIn
            setShowModal={setShowModal}
            setShowLoginForm={setShowLoginForm}
          />
        ) : (
          <FormSignUp
            setShowModal={setShowModal}
            setShowLoginForm={setShowLoginForm}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
