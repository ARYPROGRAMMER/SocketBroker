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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/groupChatValidation";
import { Input } from "../ui/input";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { GROUP_CHAT_URL } from "@/lib/apiEndPoints";

export default function CreateChat({ user }: { user: CustomUser }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = async (payload: createChatSchemaType) => {
    try {
      setLoading(true);
      const {data} = await axios.post(
        GROUP_CHAT_URL,
        { ...payload, user_id: user.id },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      if (data?.message){
        setLoading(false);
        setOpen(false);
        toast.success(data?.message);
      }

    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Group</Button>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create New Chat</DialogTitle>
          <DialogDescription>
            Create a new chat and invite others to join.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input placeholder="Enter Chat Title" {...register("title")} />
            <span className="text-red-500"> {errors?.title?.message} </span>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter Chat Passcode" {...register("passcode")} />
            <span className="text-red-500"> {errors?.passcode?.message} </span>
          </div>
          <div className="mt-4">
            <Button className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
