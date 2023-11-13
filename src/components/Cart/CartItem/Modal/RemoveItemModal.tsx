import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { PiSmileySad } from "react-icons/pi";

interface RemoveItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  removeCartItem: () => void;
}

const RemoveItemModal: React.FC<RemoveItemModalProps> = ({
  isOpen,
  onClose,
  removeCartItem,
}) => {
  return (
    <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-black">
          Tem certeza que deseja remover este produto?
        </ModalHeader>
        <ModalBody className="flex flex-row justify-center p-8">
          <PiSmileySad className="h-20 w-20 text-gray-400" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose}>
            Cancelar
          </Button>
          <Button
            color="primary"
            variant="bordered"
            onPress={() => {
              removeCartItem();
              onClose();
            }}
          >
            Remover
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RemoveItemModal;
