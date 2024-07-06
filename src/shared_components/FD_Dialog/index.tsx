import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter
} from "@nextui-org/react";
import React from "react";

const FD_Dialog = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody>Are you sure ?</ModalBody>
          <ModalFooter>
            <Button>yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FD_Dialog;
