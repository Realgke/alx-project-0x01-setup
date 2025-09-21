import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-700">{phone}</p>
      <p className="text-gray-700">{website}</p>
      <p className="text-gray-700">Company: {company.name}</p>
      <p className="text-gray-700">
        City: {address.city}, Street: {address.street}
      </p>
    </div>
  );
};

export default UserCard;
