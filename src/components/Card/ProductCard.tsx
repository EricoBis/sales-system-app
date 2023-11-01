import { Product } from "@/utils/interface/Product";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { BsCart2 } from "react-icons/bs";

interface CardProps {
  product: Product;
}

function ProductCard(props: CardProps) {
  const { description, price, image } = props.product;

  return (
    <Card className="cursor-pointer" shadow="sm" isHoverable={true}>
      <CardBody className="flex justify-center items-center overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="80%"
          alt={description}
          className="w-full object-cover"
          src={image}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-between items-start gap-3 text-small">
        <b>{description}</b>
        <p className="text-green-600 font-medium">R$ {price}</p>
        <div className="flex justify-between w-full">
          <Button className="flex-grow hover:bg-sky-700" color="primary" variant="solid">
            Comprar
          </Button>
          <Button className="flex-grow ml-2 hover:bg-zinc-200" isIconOnly={true} color="primary" variant="bordered">
            <BsCart2 className="font-bold"/>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
