import { CardHeader } from "@nextui-org/react";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

interface OrderStatusProps {
  isBudgetDone: boolean;
  status: string;
}

function OrderStatus({ isBudgetDone, status }: OrderStatusProps) {
  return (
    <>
      {isBudgetDone ? (
        <CardHeader className="flex gap-3 bg-green-200">
          <div className="flex flex-row items-center">
            <FaRegCheckCircle className="text-green-700" />
            <p className="text-lg text-green-700 ml-2">
              Compra efetivada com Sucesso!
            </p>
          </div>
        </CardHeader>
      ) : (
        <CardHeader className="flex gap-3 bg-red-200">
          <div className="flex flex-row items-center">
            <VscError className="text-red-700" />
            <p className="text-lg text-red-700 ml-2">
              {status ? status : "Não foi possível efetivar a venda!"}
            </p>
          </div>
        </CardHeader>
      )}
    </>
  );
}

export default OrderStatus;
