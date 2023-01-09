import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="border-b-[1px] py-2.5">
        <div className="flex items-center lg:px-6">
          <Link to="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              MBB React Application Example
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
