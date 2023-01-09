import * as dotenv from "dotenv";
const axios = require("axios");

dotenv.config();

export type customer = {
  name: string;
};

// Customer Lists Endpoint
export const customerList = async () => {
  try {
    const response = await axios.get("/customers");
    return response.data;
  } catch (error) {
    return [];
  }
};

// Create Customer Endpoint
export async function createCustomer(data: customer) {
  const response = await axios.post(`/customer/create`, { user: data });
  return response.data;
}

// Customer Detail Endpoint
export const customerDetail = async (id: string) => {
  try {
    const response = await axios.get("/customer/" + id);
    return response.data;
  } catch (error) {
    return [];
  }
};
