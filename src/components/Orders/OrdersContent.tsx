import React, { useEffect, useState } from "react";
import { Budget } from "@/utils/types/Budget";
import { User } from "@/utils/types/User";
import { getAllBudgets } from "@/services/Budgets/get-all-client-budgets";
import {
  Accordion,
  AccordionItem,
  Chip,
} from "@nextui-org/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuPackage } from "react-icons/lu";
import { setBudgetDone } from "@/services/Budgets/set-budget-done";
import { useRouter } from "next/navigation";
import { Product } from "@/utils/types/Product";
import AccordionItemContent from "./AccordionItemContent";

interface OrdersContentProps {
  user: User;
}

function OrdersContent({ user }: OrdersContentProps) {
  const [budgetList, setBudgetList] = useState<Budget[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      return await getAllBudgets(user);
    };
    if (user) fetchData().then((budget) => setBudgetList(budget.reverse()));
  }, []);

  const handleFinalizeOrder = async (orderId: number) => {
    if(user) {
      try {
         await setBudgetDone(orderId, user);
         router.replace(`/cart/checkout/receipt/${orderId}`);
      } catch (error) {
        localStorage.setItem("checkout_error", (error as Error).message);
        router.replace(`/cart/checkout/receipt/${orderId}`);
      }
    }
  }

  const getChipStatus = (isBudgetDone: boolean) => {
    return isBudgetDone ? (
      <Chip
        className="mt-2"
        startContent={<FaRegCheckCircle />}
        variant="bordered"
        color="success"
      >
        Pedido efetivado
      </Chip>
    ) : (
      <Chip
        className="mt-2"
        startContent={<AiOutlineInfoCircle />}
        variant="bordered"
        color="warning"
      >
        Agurdando ser efetivado
      </Chip>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 items-start justify-center mx-auto max-w-4xl">
        <div className="flex flex-row align-middle">
          <LuPackage className="w-8 h-8" />
          <h1 className="text-xl font-semibold ml-2">Meus Pedidos</h1>
        </div>
        <Accordion variant="shadow">
          {budgetList &&
            budgetList.map((budget, index) => (
              <AccordionItem
                key={index}
                subtitle={getChipStatus(budget.done)}
                title={`Pedido: #${budget.orderId}`}
              >
                <AccordionItemContent budget={budget} finalizeOrder={handleFinalizeOrder}/>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </>
  );
}
export default OrdersContent;
