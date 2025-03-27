import { Link, useLocation } from "react-router";

const NavBar = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>

          <Link
            to="/"
            className="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >
            ER Library
          </Link>
        </div>
        {!isHomePage && (
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-0 px-3 text-white rounded-sm md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
