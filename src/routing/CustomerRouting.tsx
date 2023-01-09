import { Routes, Route } from "react-router-dom";
import { CustomerList } from "../components/Customer/CustomerList/CustomerList";
import { CreateCustomer } from "../components/Customer/CreateCustomer/CreateCustomer";
import { CustomerDetail } from "../components/Customer/CustomerDetail/CustomerDetail";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerList />} />
      <Route path="/add" element={<CreateCustomer />} />
      <Route path="/detail/:id" element={<CustomerDetail />} />
    </Routes>
  );
};
export default Main;
