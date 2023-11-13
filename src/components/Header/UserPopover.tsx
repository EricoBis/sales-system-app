import React from "react";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";

function UserPopover() {
  const { data: session } = useSession();
  const userName = session?.user.name;

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button radius="full" isIconOnly variant="light">
          <CgProfile className="h-8 w-8" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <p className="text-black text-small font-bold">Olá, {userName}</p>
          <div className="text-tiny">This is the popover content</div>
          <Button
          size="sm"
            color="danger"
            variant="light"
            onPress={() => signOut()}
          >
            Sair
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserPopover;
