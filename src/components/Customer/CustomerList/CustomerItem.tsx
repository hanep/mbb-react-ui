import React from "react";

type Props = {
  id: string;
  name: string;
};

export const CustomerItem = (props: Props) => {
  const { id, name } = props;

  const openCustomerDetail = () => {
    // console.log(id, name);
    window.location.href = "/detail/001/hanif";
  };

  return (
    <tr onClick={openCustomerDetail}>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
};
