import ChatBase from "@/components/chat/ChatBase";
import React from "react";

async function chat({ params }: { params: { id: string } }) {
  console.log("group id : ", params.id);
  return <div>
    <h1>hello i am chat</h1>
    <ChatBase/>
  </div>;
}

export default chat;
