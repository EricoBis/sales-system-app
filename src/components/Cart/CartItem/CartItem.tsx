import React from "react";
import { Divider, Image } from "@nextui-org/react";
import { HiTrash } from "react-icons/hi";
import { Product } from "@/types/Product";

interface CartItemProps {
  product: Product | undefined;
  amount: number;
}

function CartItem(props: CartItemProps) {
  const { product, amount } = props;

  return (
    <>
      <Divider className="my-4" />
      <div className="flex fle-row">
        <div className="">
          <Image
            width={100}
            src={product ? product.image : ""}
            alt={product ? product.description : "No description"}
          />
        </div>
        <div className="ml-4">
          <b>{product ? product.description : "No description available"}</b>
          <p className="text-green-600 font-medium text-lg" >{product ? `R$${product.price}` : "Price not available"}</p>
          <p>{amount}</p>
        </div>
        <HiTrash className="text-red-500" />
      </div>
    </>
  );
}

export default CartItem;
