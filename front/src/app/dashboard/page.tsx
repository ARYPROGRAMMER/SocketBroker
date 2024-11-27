
// hook update
import DashNav from "@/components/dashboard/Dash";
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/components/groupChat/CreateChat";
import { fetchChatGroup } from "@/fetch/groupFetch";
import GroupCard from "@/components/groupChat/GroupCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);
  const groups: Array<ChatGroupType> | [] = await fetchChatGroup(
    session?.user?.token!
  );
  console.log(groups);
  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="container">
      <div className="flex justify-end mt-10">
        <CreateChat user={session?.user!}/>
          {/* If Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupCard group={item} key={index} user={session?.user!} />
            ))}
        </div>
      </div>
       
      </div>
    </div>
  );
}
