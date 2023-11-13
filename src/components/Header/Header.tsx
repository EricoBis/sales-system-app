"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoBagHandle } from "react-icons/io5";
import  logo  from "/public/lojinha_logo.png";

import { Badge } from "@nextui-org/react";
import { useContext, useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Header() {
  const { cart } = useContext(CartContext);
  const { data: session } = useSession();
  console.log({ session });

  const [isBadgeInvisible, setBadgeInvisible] = useState(true);

  useEffect(() => {
    setBadgeInvisible(cart.itemList.length > 0 ? false : true);
  }, [cart]);

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
        <div className="flex flex-row items-center gap-2">
          <Image className="w-8 h-8" src={logo} alt={"Logo Lojinha"} />
          <p className="font-bold text-inherit">Lojinha</p>
        </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Novidades
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Produtos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Badge
          isInvisible={isBadgeInvisible}
          content={cart.itemList.length}
          shape="circle"
          color="danger"
        >
          <Button
            href="/cart"
            as={Link}
            radius="full"
            isIconOnly
            variant="light"
          >
            <FiShoppingCart className="h-8 w-8" />
          </Button>
        </Badge>
        <Button radius="full" isIconOnly variant="light">
          <CgProfile className="h-8 w-8" />
        </Button>
        <NavbarItem>
          {session?.user ? (
            <Button
              onPress={() => signOut()}
              href=""
              color="primary"
              variant="flat"
            >
              Sign Out
            </Button>
          ) : (
            <Button
              as={Link}
              href="/api/auth/signin"
              color="primary"
              variant="flat"
            >
              Sign In
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
