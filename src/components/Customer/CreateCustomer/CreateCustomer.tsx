import React, { useState } from "react";

export const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return fullName ? queryCreateCustomer() : alert("Please key in the field");
  };

  const queryCreateCustomer = () => {
    try {
      console.log("submit to API", fullName);
      redirectCustomers();
    } catch (err) {
      throw err;
    }
  };

  const redirectCustomers = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-[2rem]">
        Create A Customer
      </div>
      <p className="pb-[2rem]">You can create your customer here. Kindly fill up the customer name.</p>
      <form>
        <label className="block pb-[2rem]">
          <span>Full name</span>
          <input
            type="text"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder=""
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <button
          className="mb-[2rem] py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleSubmit}
          type="submit"
        >
          Add Customer
        </button>
      </form>
    </>
  );
};
