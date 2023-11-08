import React from "react";
import { Image } from "@nextui-org/react";
import { Product } from "@/utils/interface/Product";

interface CartItemProps {
  product: Product | undefined;
  amount: number;
}

function CartItem(props: CartItemProps) {
  const { product, amount } = props;

  return (
    <div>
      <div className="flex flex-col">
        <Image
          src={product ? product.image : ""}
          alt={product ? product.description : "No description"}
        />
        <div>
          <div>
            <h3>
              {product ? product.description : "No description available"}
            </h3>
            <p>{product ? `Price: ${product.price}` : "Price not available"}</p>
          </div>
          <div>
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
