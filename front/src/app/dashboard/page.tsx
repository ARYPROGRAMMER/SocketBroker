
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);

  return (
    <div>
     
    </div>
  );
}