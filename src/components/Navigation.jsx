import { Link, useLocation } from "react-router-dom";

const Navigation = ({ params }) => {
  const currentLocation = useLocation().pathname;

  return (
    <nav className="w-fit font-poppins font-bold text-skin-tone-light">
      <ul className="flex flex-row items-center gap-x-3 lg:text-lg">
        <li
          className={
            currentLocation === "/"
              ? "opacity-100"
              : "opacity-60 hover:opacity-100"
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li>
          <span className="font-normal opacity-40">/</span>
        </li>
        {currentLocation === "/characters" ? (
          <li>
            <span>Character List</span>
          </li>
        ) : (
          <>
            <li className="opacity-60 hover:opacity-100">
              <Link to="/characters">Character List</Link>
            </li>
            <li>
              <span className="font-normal opacity-40">/</span>
            </li>
            <li>
              <span>{params}</span>
            </li>
          </>
        )}
      </ul>
      <hr className="mt-1.5 border border-skin-tone-darker" />
    </nav>
  );
};

export default Navigation;
