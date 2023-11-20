import { setBudgetDone } from "@/services/Budgets/set-budget-done";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

interface FinalizeOrderButtonProps {
  orderId: number;
}

function FinalizeOrderButton({ orderId }: FinalizeOrderButtonProps) {
  const { data: session } = useSession();

  const router = useRouter();

  const handleFinalizeOrder = async (orderId: number) => {
    if (session?.user) {
      try {
        await setBudgetDone(orderId, session.user);
        router.replace(`/cart/checkout/receipt/${orderId}/success`);
      } catch (error) {
        router.replace(`/cart/checkout/receipt/${orderId}/${encodeURIComponent((error as Error).message)}`);
      }
    }
  };

  return (
    <Button
      onPress={() => handleFinalizeOrder(orderId)}
      className="mt-4"
      color="primary"
    >
      Efetivar pedido
    </Button>
  );
}

export default FinalizeOrderButton;
