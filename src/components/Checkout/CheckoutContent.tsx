import React, { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import { getLastBudget } from "@/services/Budgets/get-last-budget";
import { User } from "@/types/User";
import { Product } from "@/types/Product";
import { getCartProducts } from "@/services/Products/get-cart-product";
import CheckoutItemCard from "./CheckoutItemCard";
import { Budget } from "@/types/Budget";
import { LuPackage } from "react-icons/lu";

interface CheckoutContentProps {
  user: User;
}

function CheckoutContent({ user }: CheckoutContentProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [budget, setBudget] = useState<Budget>();

  useEffect(() => {
    getLastBudget(user).then((budget) => {
      setBudget(budget);
    });
  }, []);

  useEffect(() => {
    if (budget)
      getCartProducts(budget.items).then((products) => {
        setCartProducts(products);
      });
  }, [budget]);

  const formatValue = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const getCurrProductOnList = (id: number): Product | undefined => {
    return cartProducts.find((product) => product.id === id);
  };

  return (
    <>
      {budget && (
        <div className="lg:flex gap-2">
          <div className="lg:w-2/3 lg:pr-4">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex flex-row items-center">
                  <LuPackage className="h-6 w-6" />
                  <h1 className="ml-2 font-bold text-large">Itens do Pedido</h1>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Divider/>
                <div className="flex flex-row gap-2 ml-4 mt-6">
                {budget.items &&
                  budget.items.map((item, index) => {
                    const currProduct = getCurrProductOnList(item.productId);
                    return (
                      <CheckoutItemCard
                        key={index}
                        product={currProduct}
                        amount={item.amount}
                      />
                    );
                  })}
                  </div>
              </CardBody>
            </Card>
          </div>
          <div className="lg:w-1/3">
            <Card>
              <CardHeader>
                <h1 className="ml-4 mt-3 font-bold text-large">
                  Resumo do Pedido
                </h1>
              </CardHeader>
              <CardBody>
                <Divider />
                <p className="text-base text-gray-500 text-right mt-3 mb-1 mr-4">
                  {`Imposto: ${formatValue(budget.taxCost)}`}
                </p>
                <p className="text-base text-gray-500 text-right my-1 mr-4">
                  {`Desconto: ${formatValue(budget.discount)}`}
                </p>
                <p className="text-2xl text-right my-3 mr-4">
                  {`Valor total: ${formatValue(budget.totalCost)}`}
                </p>
                <Button
                  // onPress={handleProceedToCheckout}
                  className="text-base font-extrabold"
                  color="primary"
                >
                  Efetivar Compra
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckoutContent;
