import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Link to="/">
        <button className="py-[0.5rem] text-base font-medium">Customers</button>
      </Link>
      <br />
      <Link to="/add">
        <button className="py-[0.5rem] text-base font-medium">Create New</button>
      </Link>
    </>
  );
};
export default NavigationBar;
