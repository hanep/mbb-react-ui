import React from "react";
import { CustomerItem } from "./CustomerItem";
import { mockCustomerList } from "../../../services/mockData";

export type customer = {
  id: string;
  name: string;
};

export const CustomerList = () => {
  const { customers } = mockCustomerList;

  return (
    <>
      <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-[2rem]">
        List Of Customers
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: customer) => (
              <CustomerItem key={customer.id} id={customer.id} name={customer.name} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
