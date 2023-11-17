import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Product } from "@/types/Product";

interface CheckoutItemProps {
  product: Product | undefined;
  amount: number;
}

function CheckoutItem({ product, amount }: CheckoutItemProps) {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={product ? product.description : "No description"}
          className="w-full object-cover h-[140px]"
          src={product ? product.image : ""}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{amount}x</b>
      </CardFooter>
    </Card>
  );
}

export default CheckoutItem;
