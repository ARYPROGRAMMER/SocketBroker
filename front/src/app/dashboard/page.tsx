import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);

  return (
    <div>
      <div className="container">
        {/* If Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      </div>
    </div>
  );
}
