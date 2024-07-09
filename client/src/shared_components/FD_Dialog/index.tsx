import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter
} from "@nextui-org/react";
import React from "react";

const FD_Dialog = ({
  messageText,
  closeBtnText,
  actionBtnText,
  isOpen,
  onClose,
  handleActionBtn
}: {
  messageText: string;
  closeBtnText?: string;
  actionBtnText?: string;
  isOpen: boolean;
  onClose: () => void;
  handleActionBtn?: () => void;
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody>{messageText}</ModalBody>
          <ModalFooter>
            {closeBtnText && <Button onClick={onClose}>{closeBtnText}</Button>}
            {actionBtnText && handleActionBtn && (
              <Button onClick={handleActionBtn}>{actionBtnText}</Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FD_Dialog;
