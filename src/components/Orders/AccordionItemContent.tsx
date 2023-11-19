import React, { useEffect, useState } from "react";
import { getCartProducts } from "@/services/Products/get-cart-product";
import { formatValue } from "@/utils/functions/formatting";
import { getCurrProductOnList } from "@/utils/functions/getProductOnList";
import { Budget } from "@/utils/types/Budget";
import { Product } from "@/utils/types/Product";
import { Button, Divider } from "@nextui-org/react";
import ItemCard from "./ItemCard";

interface AccordionItemContentProps {
  budget: Budget;
  finalizeOrder: (orderId: number) => Promise<void>;
}

function AccordionItemContent({
  budget,
  finalizeOrder,
}: AccordionItemContentProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (budget)
      getCartProducts(budget.items).then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <>
      <Divider />
      <div className="flex flex-row gap-2 mt-4">
        {budget &&
          budget.items.map((item, index) => {
            const currProduct = getCurrProductOnList(item.productId, products);
            return (
              <ItemCard
                key={index}
                product={currProduct}
                amount={item.amount}
              />
            );
          })}
      </div>
      <div className="flex flex-col items-end my-4">
        <p className="text-gray-600">
          Total produtos: {formatValue(budget.orderCost)}
        </p>
        <p className="text-gray-600">Imposto: {formatValue(budget.taxCost)}</p>
        <p className="text-gray-600">
          Desconto: {formatValue(budget.discount)}
        </p>
        <p className="font-semibold">Total: {formatValue(budget.totalCost)}</p>
        {!budget.done && (
          <Button
            onPress={() => finalizeOrder(budget.orderId)}
            className="mt-4"
            color="primary"
          >
            Efetivar pedido
          </Button>
        )}
      </div>
    </>
  );
}

export default AccordionItemContent;
