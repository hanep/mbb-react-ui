import React from "react";
import { CustomerItem } from "./CustomerItem";
import { mockData } from "./mockData";

export const CustomerList = () => {
  const { customers } = mockData;

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: any) => (
            <CustomerItem key={customer.id} id={customer.id} name={customer.name} />
          ))}
        </tbody>
      </table>
    </>
  );
};
