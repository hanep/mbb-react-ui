import React from "react";
import { Link, useParams } from "react-router-dom";

export const CustomerDetail = () => {
  const params = useParams();
  return (
    <>
      <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-[2rem]">
        Customer Detail for #{params.id}
      </div>
      <div className="pb-[2rem]"> Full Name: ----</div>
      <Link to="/">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Back
        </button>
      </Link>
    </>
  );
};
