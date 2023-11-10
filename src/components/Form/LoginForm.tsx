import React from "react";
import { Card, Spacer, Button, Input, Divider } from "@nextui-org/react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import Image from 'next/image'
import logo from "../../../public/lojinha_logo.svg";

export default function Login() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-unit-10">
        <Card className="w-full max-w-md p-5 sm:p-20">
          <div className="flex flex-col items-center">
          <Image src={logo} width={80} height={80} alt="Logo da loja" />
          <h1 className="text-left text-large font-bold mb-10 mt-5">Login - Lojinha</h1>
          </div>
          <Input
            size="lg"
            type="email"
            label="Email"
            placeholder="you@email.com"
            labelPlacement="outside"
            startContent={
              <HiOutlineMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Spacer y={1} />
          <Input
            size="lg"
            type="password"
            label="Senha"
            labelPlacement="outside"
            startContent={
              <HiOutlineLockClosed className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Spacer y={5} />
          <Button size="lg" color="primary">
            Fazer login
          </Button>
          <Divider className="my-4" />
          <p className="text-center text-gray-600 text-sm">
            Ainda não tem uma conta?
          </p>
          <Spacer y={2} />
          <Button color="primary" variant="bordered">
            Registrar-se
          </Button>
        </Card>
      </div>
    </div>
  );
}
