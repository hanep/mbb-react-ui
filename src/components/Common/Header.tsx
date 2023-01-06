import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link to="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MBB ReactApp</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
