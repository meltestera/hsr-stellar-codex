import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const CharacterCard = ({ character }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden rounded-[4px] bg-violet-dark p-1 shadow-2xl shadow-black xs:p-4 sm:block sm:min-h-[254px] lg:min-h-[274px]">
        <Link to={`${character.name}`}>
          <div className="flex w-full flex-row items-center justify-around sm:block sm:h-full">
            <div className="relative flex w-fit items-center justify-center p-1">
              {windowWidth < 640 ? (
                <img
                  src={character.icon}
                  alt={character.alt}
                  fetchpriority="high"
                  width="50"
                  height="50"
                  className="h-auto object-cover object-center xs:min-w-[75px]"
                />
              ) : (
                <img
                  src={character.portrait}
                  alt={character.alt}
                  fetchpriority="high"
                  width="50"
                  height="50"
                  className="h-auto object-cover object-center xs:min-w-[75px]"
                />
              )}
            </div>
            <div className="flex grow flex-col pl-[10px] xs:gap-y-3 xs:pl-[12px]">
              <span className="text-xs xs:text-sm">
                <b className="font-poppins tracking-wide">{character.name}</b>
              </span>
              <div className="flex flex-row items-center gap-x-1">
                <div className="flex w-[105px] flex-row items-center gap-x-1 xs:w-[118px]">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={character.iconPath}
                      alt={character.altPath}
                      fetchpriority="high"
                      width="25"
                      height="25"
                      className="h-auto object-cover object-center xs:w-[30px]"
                    />
                  </div>
                  <span className="font-outfit text-xs xs:text-sm">
                    {character.path}
                  </span>
                </div>
                <div className="flex w-[105px] flex-row items-center gap-x-1 xs:w-[118px]">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={character.iconType}
                      alt={character.altType}
                      fetchpriority="high"
                      width="25"
                      height="25"
                      className="h-auto object-cover object-center xs:w-[30px]"
                    />
                  </div>
                  <span className="font-outfit text-xs xs:text-sm">
                    {character.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CharacterCard;
