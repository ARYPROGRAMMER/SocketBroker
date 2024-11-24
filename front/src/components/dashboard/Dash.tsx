import React from "react";
import ProfileMenu from "../auth/ProfileMenu";

function DashNav({ name, image }: { name: string; image?: string }) {
  return (
    <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">kafkaChat</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700"></div>
      <ProfileMenu name={name} image={image} />
    </nav>
  );
}

export default DashNav;
