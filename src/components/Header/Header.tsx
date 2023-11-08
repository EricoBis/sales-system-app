'use client';

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
import { Badge } from "@nextui-org/react";
import { useContext, useState, useEffect } from "react";

function Header() {
  const { cart } = useContext(CartContext);

  const [isBadgeInvisible, setBadgeInvisible] = useState(true);

  useEffect(() => {
    setBadgeInvisible(cart.itemList.length > 0 ? false : true)
  }, [cart]);

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Lojinha</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Badge isInvisible={isBadgeInvisible} content={cart.itemList.length} shape="circle" color="danger">
          <Button radius="full" isIconOnly variant="light">
            <FiShoppingCart className="h-8 w-8" />
          </Button>
        </Badge>
        <Button radius="full" isIconOnly variant="light">
          <CgProfile className="h-8 w-8" />
        </Button>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;