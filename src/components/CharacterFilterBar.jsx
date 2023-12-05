// import images

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

const CharacterFilterBar = ({ characters }) => {
  return (
    <>
      <div className="flex flex-col gap-y-1 space-y-1">
        <div>
          <input
            placeholder="Type character name here..."
            type="search"
            className="border-skin-tone-darker w-full rounded border-l-8 bg-transparent px-2 py-3 text-lg shadow-lg shadow-black outline-none placeholder:text-[inherit] placeholder:opacity-60"
          />
        </div>
        <div className="flex flex-row items-center justify-around">
          <button className="bg-skin-tone-darker h-full w-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "inline-block" }}
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
          <button className="bg-skin-tone-darker h-full w-full">
            <span className="font-outfit text-lg">4</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "inline-block" }}
            >
              <path
                d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button className="bg-skin-tone-darker h-full w-full">
            <span className="font-outfit text-lg">5</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "inline-block" }}
            >
              <path
                d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="type">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "inline-block" }}
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
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Physical}
                alt="Class_Type_Physical"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Fire}
                alt="Class_Type_Fire"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Ice}
                alt="Class_Type_Ice"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Lightning}
                alt="Class_Type_Lightning"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Wind}
                alt="Class_Type_Wind"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Quantum}
                alt="Class_Type_Quantum"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Imaginary}
                alt="Class_Type_Imaginary"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
        </div>
        <div className="path">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "inline-block" }}
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
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Abundance}
                alt="Character_Path_Abundance"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Destruction}
                alt="Character_Path_Destruction"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Erudition}
                alt="Character_Path_Erudition"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Harmony}
                alt="Character_Path_Harmony"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Hunt}
                alt="Character_Path_Hunt"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Nihility}
                alt="Character_Path_Nihility"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
          <button>
            <div className="flex w-fit flex-col items-center justify-center">
              <img
                src={Preservation}
                alt="Character_Path_Preservation"
                height="30"
                width="30"
                fetchpriority="high"
                className="h-auto object-cover object-center"
              />
            </div>
          </button>
        </div>
        <div className="reset">
          <button></button>
        </div>
      </div>
    </>
  );
};

export default CharacterFilterBar;
