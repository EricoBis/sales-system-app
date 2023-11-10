import React, { useContext, useEffect, useState } from "react";

import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { BsCart2 } from "react-icons/bs";

import { CartContext } from "@/context/CartContext";
import { getCartProducts } from "@/services/Products/get-cart-product";
import { Product } from "@/utils/interface/Product";
import CartItem from "../CartItem/CartItem";

function CartContent() {
  const { cart } = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    getCartProducts(cart).then((products) => {
      setCartProducts(products);
    });
  }, []);

  const getCurrProductOnList = (id: number): Product | undefined => {
    return cartProducts.find(product =>  product.id === id);
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-2/3 lg:pr-4">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex flex-row">
              <BsCart2 className="h-6 w-6" />
              <h1 className="ml-4 font-bold text-large">Meu carrinho</h1>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            {cart.itemList &&
              cart.itemList.map((item) => {
                const currProduct = getCurrProductOnList(item.productId);                 
                return <CartItem product={currProduct} amount={item.amount}/>
              })}
          </CardBody>
        </Card>
      </div>
      <div className="lg:w-1/3">
        <Card>
          <CardHeader>
            <h1 className="ml-4 font-bold text-large">Total</h1>
            <Divider className="my-4" />
          </CardHeader>
          <CardBody>
            {/* TODO - Informações breves de valor total */}
            {/* TODO - Botão para finalizar a compra */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CartContent;
