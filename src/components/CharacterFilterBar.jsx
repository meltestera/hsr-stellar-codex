import { useEffect, useState } from "react";

// types
import Fire from "../assets/types/Class_Type_Fire.webp";
import Ice from "../assets/types/Class_Type_Ice.webp";
import Imaginary from "../assets/types/Class_Type_Imaginary.webp";
import Lightning from "../assets/types/Class_Type_Lightning.webp";
import Physical from "../assets/types/Class_Type_Physical.webp";
import Quantum from "../assets/types/Class_Type_Quantum.webp";
import Wind from "../assets/types/Class_Type_Wind.webp";

// paths
import Abundance from "../assets/paths/Character_Path_Abundance.webp";
import Destruction from "../assets/paths/Character_Path_Destruction.webp";
import Erudition from "../assets/paths/Character_Path_Erudition.webp";
import Harmony from "../assets/paths/Character_Path_Harmony.webp";
import Hunt from "../assets/paths/Character_Path_Hunt.webp";
import Nihility from "../assets/paths/Character_Path_Nihility.webp";
import Preservation from "../assets/paths/Character_Path_Preservation.webp";

const typeImages = {
  Fire: Fire,
  Ice: Ice,
  Imaginary: Imaginary,
  Lightning: Lightning,
  Physical: Physical,
  Quantum: Quantum,
  Wind: Wind,
};

const pathImages = {
  Abundance: Abundance,
  Destruction: Destruction,
  Erudition: Erudition,
  Harmony: Harmony,
  Hunt: Hunt,
  Nihility: Nihility,
  Preservation: Preservation,
};

const CharacterFilterBtn = ({ onClick, value, isActive, image }) => (
  <span className="w-[20%] grow">
    <button
      onClick={onClick}
      type="button"
      value={value}
      className={`flex w-full items-center justify-center border-x border-x-skin-tone-dark px-1.5 py-2 hover:bg-skin-tone-light/20 ${
        isActive ? "bg-skin-tone/30" : ""
      }`}
    >
      <div className="flex w-fit flex-col items-center justify-center">
        <img
          src={image}
          alt={`Class_Type_${value}`}
          height="30"
          width="30"
          fetchpriority="high"
          className="h-auto object-cover object-center"
        />
      </div>
    </button>
  </span>
);

const CharacterFilterBar = ({
  query,
  setQuery,
  setSelectedRarityFilter,
  setSelectedTypeFilter,
  setSelectedPathFilter,
}) => {
  const [isRarityFilterActive, setIsRarityFilterActive] = useState("all");
  const [isTypeFilterActive, setIsTypeFilterActive] = useState("all");
  const [isPathFilterActive, setIsPathFilterActive] = useState("all");
  const [isResetActive, setIsResetActive] = useState(false);

  useEffect(() => {
    const storedRarityFilter = sessionStorage.getItem("rarityFilter");
    const storedTypeFilter = sessionStorage.getItem("typeFilter");
    const storedPathFilter = sessionStorage.getItem("pathFilter");
    const storedQuery = sessionStorage.getItem("query");

    if (storedRarityFilter) {
      setSelectedRarityFilter(storedRarityFilter);
      setIsRarityFilterActive(storedRarityFilter);
    }

    if (storedTypeFilter) {
      setSelectedTypeFilter(storedTypeFilter);
      setIsTypeFilterActive(storedTypeFilter);
    }

    if (storedPathFilter) {
      setSelectedPathFilter(storedPathFilter);
      setIsPathFilterActive(storedPathFilter);
    }

    if (storedQuery) {
      setQuery(storedQuery);
      setIsResetActive(true);
    }

    if (
      storedRarityFilter ||
      storedTypeFilter ||
      storedPathFilter ||
      storedQuery
    ) {
      setIsResetActive(true);
    } else {
      setIsResetActive(false);
    }
  }, []);

  const handleSearchFilter = (e) => {
    let userQuery = e.currentTarget.value;
    setQuery(userQuery);
    setIsResetActive(true);

    if (e.key === "Enter") {
      e.currentTarget.blur();
    }

    sessionStorage.setItem("query", userQuery);
  };

  const handleRarityFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedRarityFilter(val);
    setIsRarityFilterActive(val);
    setIsResetActive(true);

    sessionStorage.setItem("rarityFilter", val);
  };

  const handleTypeFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedTypeFilter(val);
    setIsTypeFilterActive(val);
    setIsResetActive(true);

    sessionStorage.setItem("typeFilter", val);
  };

  const handlePathFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedPathFilter(val);
    setIsPathFilterActive(val);
    setIsResetActive(true);

    sessionStorage.setItem("pathFilter", val);
  };

  const handleResetFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedRarityFilter(val);
    setSelectedTypeFilter(val);
    setSelectedPathFilter(val);
    setIsRarityFilterActive(val);
    setIsTypeFilterActive(val);
    setIsPathFilterActive(val);
    setQuery("");

    sessionStorage.removeItem("rarityFilter");
    sessionStorage.removeItem("typeFilter");
    sessionStorage.removeItem("pathFilter");
    sessionStorage.removeItem("query");

    setIsResetActive(false);
  };

  const handleClearSearch = () => {
    setQuery("");
    setIsResetActive(false);

    sessionStorage.removeItem("query");
  };

  return (
    <>
      <div className="mt-4 flex flex-wrap justify-center gap-y-3">
        <div className="relative flex-auto">
          <input
            onChange={handleSearchFilter}
            value={query}
            placeholder="Type character name here..."
            className="w-full rounded border-l-8 border-skin-tone-darker bg-transparent px-3 py-4 shadow-lg shadow-black outline-none transition duration-500 placeholder:text-inherit placeholder:opacity-60 focus:border-skin-tone focus:placeholder:opacity-100 lg:border-l-[16px] lg:text-lg lg:placeholder:text-lg lg:focus:scale-105 xl:border-l-[24px]"
          />
          {query && (
            <span className="absolute right-5 top-4">
              <button onClick={handleClearSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </span>
          )}
        </div>
        <div className="mt-4 w-full border border-skin-tone-dark bg-skin-tone-darker">
          <div className="relative inline-flex w-full gap-x-[1px] align-top">
            <button
              onClick={handleRarityFilter}
              className={`flex w-full items-center justify-center border-x border-x-skin-tone-dark px-1.5 py-2 hover:bg-skin-tone-light/20 ${
                isRarityFilterActive === "all" ? "bg-skin-tone/30" : ""
              }`}
              value="all"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-asterisk lg:h-8 lg:w-8"
              >
                <path d="M12 6v12" />
                <path d="M17.196 9 6.804 15" />
                <path d="m6.804 9 10.392 6" />
              </svg>
            </button>
            <button
              onClick={handleRarityFilter}
              className={`inline-flex w-full items-center justify-center gap-x-1 border-x border-x-skin-tone-dark py-1.5 hover:bg-skin-tone-light/20 ${
                isRarityFilterActive === "4" ? "bg-skin-tone/30" : ""
              }`}
              value="4"
              type="button"
            >
              <span className="font-outfit lg:text-lg">
                <b>4 ★</b>
              </span>
            </button>
            <button
              onClick={handleRarityFilter}
              className={`inline-flex w-full items-center justify-center gap-x-1 border-x border-x-skin-tone-dark px-1.5 py-2 hover:bg-skin-tone-light/20 ${
                isRarityFilterActive === "5" ? "bg-skin-tone/30" : ""
              }`}
              value="5"
              type="button"
            >
              <span className="font-outfit lg:text-lg">
                <b>5 ★</b>
              </span>
            </button>
          </div>
        </div>
        <div className="grow border border-skin-tone-dark bg-skin-tone-darker">
          <div className="relative inline-flex w-full gap-x-[1px] align-top">
            <button
              onClick={handleTypeFilter}
              className={`flex w-12 grow-0 items-center justify-center border-x border-x-skin-tone-dark px-1.5 py-2 hover:bg-skin-tone-light/20 sm:w-[70px] ${
                isTypeFilterActive === "all" ? "bg-skin-tone/30" : ""
              }`}
              type="button"
              value="all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-asterisk lg:h-7 lg:w-7"
              >
                <path d="M12 6v12" />
                <path d="M17.196 9 6.804 15" />
                <path d="m6.804 9 10.392 6" />
              </svg>
            </button>
            {Object.keys(typeImages).map((type) => (
              <CharacterFilterBtn
                key={type}
                onClick={handleTypeFilter}
                value={type}
                isActive={isTypeFilterActive === type}
                image={typeImages[type]}
              />
            ))}
          </div>
        </div>
        <div className="w-full grow border border-skin-tone-dark bg-skin-tone-darker align-top">
          <div className="relative inline-flex w-full gap-x-[1px] align-top">
            <button
              onClick={handlePathFilter}
              className={`flex w-12 grow-0 items-center justify-center border-x border-x-skin-tone-dark px-1.5 py-2 hover:bg-skin-tone-light/20 sm:w-[70px] ${
                isPathFilterActive === "all" ? "bg-skin-tone/30" : ""
              }`}
              type="button"
              value="all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-asterisk lg:h-7 lg:w-7"
              >
                <path d="M12 6v12" />
                <path d="M17.196 9 6.804 15" />
                <path d="m6.804 9 10.392 6" />
              </svg>
            </button>
            {Object.keys(pathImages).map((path) => (
              <CharacterFilterBtn
                key={path}
                onClick={handlePathFilter}
                value={path}
                isActive={isPathFilterActive === path}
                image={pathImages[path]}
              />
            ))}
          </div>
        </div>
        <div className="reset w-full border border-skin-tone-darker bg-skin-tone-darker">
          <button
            onClick={handleResetFilter}
            disabled={!isResetActive}
            type="button"
            value="all"
            className={`flex w-full items-center justify-center gap-x-1 px-1.5 py-2 font-outfit text-lg tracking-wide ${
              isResetActive
                ? "border border-skin-tone-dark bg-skin-tone-darker hover:bg-skin-tone-light/20 "
                : "bg-almost-black/75 text-skin-tone-light/40"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterFilterBar;
