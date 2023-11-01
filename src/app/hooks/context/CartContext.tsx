import { createContext, useCallback, useState } from "react";
import { Cart, CartItem } from "@/app/utils/interface/Cart";

type CartContextType = {
  cart: Cart;
  handleRemoveCartItem: (id: number) => void;
  handleAddCartItem: (newItem: CartItem) => void;
};

const CartContext = createContext<CartContextType>({
  cart: { itemList: [] },
  handleRemoveCartItem: () => {},
  handleAddCartItem: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ itemList: [] });

  const updateItemAmount = ( listToUpdate: CartItem[], idToUpdate: number, oper: number): CartItem[] => {
    return listToUpdate.map((item) => ({
      ...item,
      amount: item.productId === idToUpdate ? item.amount + oper : item.amount,
    }));
  };

  const handleRemoveCartItem = useCallback((productId: number) => {
    const updatedCart = {
      itemList: cart.itemList.filter((item) => item.productId !== productId),
    };

    setCart(updatedCart);
  }, []);

  const handleAddCartItem = useCallback((newItem: CartItem) => {
    const updatedCart = { ...cart };
    const itemAlreadyOnCart = cart.itemList.some(
      (item) => item.productId === newItem.productId
    );

    if (itemAlreadyOnCart) {
      updatedCart.itemList = updateItemAmount(
        updatedCart.itemList,
        newItem.productId,
        1
      );
    } else {
      updatedCart.itemList.push(newItem);
    }

    setCart(updatedCart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleRemoveCartItem,
        handleAddCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
