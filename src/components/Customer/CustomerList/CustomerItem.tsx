import React from "react";

type Props = {
  id: string;
  name: string;
};

export const CustomerItem = (props: Props) => {
  const { id, name } = props;
  const link = "/detail/" + id;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {id}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4 text-right">
        <a href={link} className="font-medium text-blue-600 dark:text-blue-500">
          Detail
        </a>
      </td>
    </tr>
  );
};
