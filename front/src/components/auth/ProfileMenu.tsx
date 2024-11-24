"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import UserAvatar from "../common/UserAvatar";

const LogoutModel = dynamic(()=>import('../auth/LogoutModel'));

export default function ProfileMenu({ name, image }: { name: string; image?: string }) {
  const [logoutopen, setLogoutOpen] = useState(false);

  return (
    <>
    {
      logoutopen && <Suspense fallback={<p>Loading...</p>}>
        <LogoutModel open={logoutopen} setOpen={setLogoutOpen} />
      </Suspense>
    }
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={name} image={image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={()=> setLogoutOpen(true)}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

