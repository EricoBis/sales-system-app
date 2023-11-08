'use client'

import React, { useContext } from "react";
import CartContent from "@/components/Cart/CartContent/CartContent";
import EmptyCart from "@/components/Cart/CartContent/EmptyCart";
import { CartContext } from "@/context/CartContext";

export default function page() {
  const { cart } = useContext(CartContext);

  return <>{cart.itemList.length === 0 ? <EmptyCart /> : <CartContent />}</>; //TODO - TROCAR !== QUANDO PRONTO
}
