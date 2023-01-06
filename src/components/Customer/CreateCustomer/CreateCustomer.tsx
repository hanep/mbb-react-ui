import React, { useState } from "react";

export const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    queryCreateCustomer(fullName);
  };

  const queryCreateCustomer = (fullName: string) => {
    try {
      console.log("submit to API");
    } catch (err) {
      throw err;
    }
    window.location.href = "/";
  };

  return (
    <>
      Create Customer <br />
      <form>
        <label>
          Enter your name:
          <input placeholder="Your Full Name" onChange={(e) => setFullName(e.target.value)} />
        </label>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
