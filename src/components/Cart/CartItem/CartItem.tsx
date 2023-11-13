"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Product } from "@/types/Product";

import { Button, Divider, Image } from "@nextui-org/react";
import { HiTrash } from "react-icons/hi";
import { BiPlus, BiMinus } from "react-icons/bi";

interface CartItemProps {
  product: Product | undefined;
  amount: number;
}

function CartItem(props: CartItemProps) {
  const { product, amount } = props;
  const { handleIncrementCartItem, handleDecrementCartItem } =
    useContext(CartContext);

  return (
    <>
      <Divider className="my-4" />
      <div className="flex flex-row justify-between">
        <div className="flex fle-row">
          <>
            <Image
              width={100}
              src={product ? product.image : ""}
              alt={product ? product.description : "No description"}
            />
          </>
          <div className="flex flex-col justify-between ml-4">
            <div>
              <b>
                {product ? product.description : "No description available"}
              </b>
              <p className="text-green-600 font-medium text-lg">
                {product ? `R$${product.price}` : "Price not available"}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Button
                isIconOnly
                size="sm"
                radius="full"
                onPress={() => product && handleDecrementCartItem(product.id)}
              >
                <BiMinus className="w-4 h-4" />
              </Button>
              <p className="mx-2">{amount}</p>
              <Button
                isIconOnly
                size="sm"
                radius="full"
                onPress={() => product && handleIncrementCartItem(product.id)}
              >
                <BiPlus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Button
          size="sm"
          color="default"
          variant="bordered"
          endContent={<HiTrash className="text-gray-500 h-4 w-4" />}
        >
          Remover
        </Button>
      </div>
    </>
  );
}

export default CartItem;
