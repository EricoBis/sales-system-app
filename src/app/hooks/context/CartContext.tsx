import { createContext, useCallback, useState } from "react";
import { Cart, CartItem } from "@/app/utils/interface/Cart";

type CartContextType = {
  cart: Cart;
};

const CartContext = createContext<CartContextType>({
  cart: { itemList: [] },
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const [cart, setCart] = useState<Cart>({ itemList: [] });

  const handleCartChange = useCallback((cart: Cart) => {
    setCart(cart);
  }, []);

  const updateItemAmount = (listToUpdate: CartItem[], idToUpdate: number, oper: number): CartItem[] => {
    return listToUpdate.map(item => ({
        ...item,
        amount: item.productId === idToUpdate ? item.amount + oper : item.amount,
    }));
  }

  const handleRemoveCartItem = useCallback((productId: number) => {
    const updatedCart = {
      itemList: cart.itemList.filter((item) => item.productId !== productId),
    };

    handleCartChange(updatedCart);
  }, []);

  const handleAddCartItem = useCallback((newItem: CartItem) => {
    const updatedCart = { ...cart };
    const itemAlreadyOnCart = cart.itemList.some(
      (item) => item.productId === newItem.productId
    );

    if (itemAlreadyOnCart) {
        updatedCart.itemList = updateItemAmount(updatedCart.itemList, newItem.productId, 1);
    } else {
      updatedCart.itemList.push(newItem);
    }

    handleCartChange(updatedCart);
  }, []);

  // const incrementCartItem = useCallback((id: number) => {
  //   const updatedCart = { ...cart };
  //   updatedCart.itemList = updateItemAmount(updatedCart.itemList, id, 1);
  //   handleCartChange(updatedCart);
  // }, [])

  // const decrementCartItem = useCallback((id: number) => {
  //   const updatedCart = { ...cart };
  //   updatedCart.itemList = updateItemAmount(updatedCart.itemList, id, -1);
  //   handleCartChange(updatedCart);
  // }, [])


  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};
