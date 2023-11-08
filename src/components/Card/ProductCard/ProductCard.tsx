"use client";

import { CartContext } from "@/context/CartContext";
import { Product } from "@/utils/interface/Product";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useContext } from "react";
import { BsCart2, BsFillCartCheckFill } from "react-icons/bs";
import ConfirmationModal from "./Modal/ConfirmationModal";

interface CardProps {
  product: Product;
}

function ProductCard(props: CardProps) {
  const { id, description, price, image } = props.product;
  const { handleAddCartItem } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCartButton = () => {
    handleAddCartItem({ productId: id, amount: 1 });
    onOpen();
  };

  return (
    <Card className="cursor-pointer" shadow="sm" isHoverable={true}>
      <CardBody className="flex justify-center items-center overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="80%"
          alt={description}
          className="w-full object-cover"
          src={image}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-between items-start gap-3 text-small">
        <b>{description}</b>
        <p className="text-green-600 font-medium">R$ {price}</p>
        <div className="flex justify-between w-full">
          <Button
            className="flex-grow hover-bg-sky-700"
            color="primary"
            variant="solid"
          >
            Comprar
          </Button>
          <Button
            onPress={() => handleCartButton()}
            className="flex-grow ml-2 hover-bg-zinc-200"
            isIconOnly={true}
            color="primary"
            variant="bordered"
          >
            <BsCart2 className="h-6 w-6" />
          </Button>
        </div>
      </CardFooter>
      <ConfirmationModal isOpen={isOpen} onClose={onClose} />
    </Card>
  );
}

export default ProductCard;