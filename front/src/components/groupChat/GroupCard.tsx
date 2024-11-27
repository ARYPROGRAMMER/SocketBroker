import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupCardMenu from "./GroupCardMenu";

export default function GroupCard({
    group,
    user,
}:{
    group: ChatGroupType;
    user: CustomUser;
}){

    return (
        <Card>
            <CardHeader className="flex-row justify-between items-center">
                <CardTitle className="text-2xl">
                    {group.title}
                </CardTitle>


            </CardHeader>
        </Card>
    )
}