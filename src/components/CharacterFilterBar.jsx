import { useState } from "react";

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

  const handleSearchFilter = (e) => {
    setQuery(e.target.value);
  };

  const handleRarityFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedRarityFilter(val);
    setIsRarityFilterActive(val);
  };

  const handleTypeFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedTypeFilter(val);
    setIsTypeFilterActive(val);
  };

  const handlePathFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedPathFilter(val);
    setIsPathFilterActive(val);
  };

  const handleResetFilter = (e) => {
    let val = e.currentTarget.value;
    setSelectedRarityFilter(val);
    setSelectedTypeFilter(val);
    setSelectedPathFilter(val);
    setIsRarityFilterActive(val);
    setIsTypeFilterActive(val);
    setIsPathFilterActive(val);
  };

  return (
    <>
      <div className="mt-4 flex flex-wrap justify-center gap-y-3">
        <div className="relative flex-auto">
          <input
            onChange={handleSearchFilter}
            value={query}
            placeholder="Type character name here..."
            type="search"
            className="focus:palceholder:opacity-100 w-full rounded border-l-8 border-skin-tone-darker bg-transparent px-3 py-4 shadow-lg shadow-black outline-none transition duration-500 placeholder:text-inherit placeholder:opacity-60 focus:border-skin-tone focus:placeholder:opacity-100 lg:border-l-[16px] lg:text-lg lg:placeholder:text-lg lg:focus:scale-105 xl:border-l-[24px]"
          />
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
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "inline-block" }}
                className="lg:h-5 lg:w-5"
              >
                <path
                  d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
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
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "inline-block" }}
                className="lg:h-5 lg:w-5"
              >
                <path
                  d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
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
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "inline-block" }}
                className="lg:h-5 lg:w-5"
              >
                <path
                  d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
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
        <div className="reset w-full border border-skin-tone-dark bg-skin-tone-darker">
          <button
            onClick={handleResetFilter}
            type="button"
            value="all"
            className="flex w-full items-center justify-center gap-x-1 border-x border-x-skin-tone-dark px-1.5 py-2 font-outfit text-lg tracking-wide hover:bg-skin-tone-light/20"
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
