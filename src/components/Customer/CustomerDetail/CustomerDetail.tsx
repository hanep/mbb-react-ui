import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { baseURL } from "../../../services/customerApi";

export const CustomerDetail = () => {
  const [customerId, setCustomerId] = React.useState("");
  const [customerName, setCustomerName] = React.useState("");

  const params = useParams();

  React.useEffect(() => {
    callCustomerDetail();
  });

  const callCustomerDetail = async () => {
    await axios.get(baseURL + "/customer/" + params.id).then((response) => {
      setCustomerId(response.data.id);
      setCustomerName(response.data.name);
    });
  };

  return (
    <>
      <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-[2rem]">
        Customer Detail for #{customerId}
      </div>
      <div className="pb-[2rem]"> Full Name: {customerName} </div>
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
