"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginModel() {


  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true
    })
  }



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl"> Are you Fr Sure?</DialogTitle>
          <DialogDescription>
            KafkaChat makes it effortless to create secure chat links and start conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
            <Image src="/images/google.png" className="mr-4" alt="google-logo" width={25} height={25} />
            Continue with Google Buddy
        </Button>
      </DialogContent>
    </Dialog>
  );
}
