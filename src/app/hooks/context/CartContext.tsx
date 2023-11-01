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

  const updateItemAmount = (
    listToUpdate: CartItem[],
    idToUpdate: number,
    oper: number
  ): CartItem[] => {
    return listToUpdate.map((item) => ({
      ...item,
      amount: item.productId === idToUpdate ? item.amount + oper : item.amount,
    }));
  };

  const handleRemoveCartItem = useCallback((productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      itemList: prevCart.itemList.filter(
        (item) => item.productId !== productId
      ),
    }));
  }, []);

  const handleAddCartItem = useCallback((newItem: CartItem) => {
    setCart((prevCart) => {
      const itemAlreadyOnCart = prevCart.itemList.find(
        (item) => item.productId === newItem.productId
      );

      if (itemAlreadyOnCart) {
        // If the item already exists in the cart, create an updated copy of the cart
        return {
          ...prevCart,
          itemList: updateItemAmount(prevCart.itemList, newItem.productId, 1),
        };
      } else {
        // If the item does not exist in the cart, add it
        return {
          ...prevCart,
          itemList: [...prevCart.itemList, newItem],
        };
      }
    });
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
