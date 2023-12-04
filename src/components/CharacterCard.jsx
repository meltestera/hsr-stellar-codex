import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-visible rounded-[4px] bg-violet-dark p-1 shadow-2xl shadow-black xs:p-4 sm:block sm:min-h-[254px]  lg:min-h-[274px]">
        <Link to={`${character.name}`}>
          <div className="flex h-full w-full flex-row items-center justify-around sm:min-h-[250px] sm:-translate-y-5 sm:flex-col">
            <div className="flex w-fit items-center justify-center sm:-translate-y-1/2 sm:rounded-[50%] sm:bg-almost-black sm:p-2">
              <img
                src={character.icon}
                alt={character.alt}
                fetchpriority="high"
                width="50"
                height="50"
                className="sm: h-auto object-cover object-center xs:min-w-[75px]"
              />
            </div>
            <div className="flex grow flex-col pl-[10px] xs:gap-y-3 xs:pl-[12px] sm:w-full sm:justify-between sm:gap-y-1 sm:space-y-3 sm:pl-0 xl:space-y-4">
              <span className="text-xs xs:text-sm sm:text-center sm:text-lg">
                <b className="font-poppins tracking-wide">{character.name}</b>
              </span>
              <div className="flex flex-row items-center gap-x-1 sm:flex-col sm:gap-y-1 sm:space-y-1 xl:space-y-2">
                <div className="flex w-[105px] flex-row items-center gap-x-1 xs:w-[118px] sm:flex-col sm:gap-y-1">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={character.iconPath}
                      alt={character.altPath}
                      fetchpriority="high"
                      width="25"
                      height="25"
                      className="h-auto object-cover object-center xs:w-[35px]"
                    />
                  </div>
                  <span className="font-outfit text-xs xs:text-sm">
                    {character.path}
                  </span>
                </div>
                <div className="flex w-[105px] flex-row items-center gap-x-1 xs:w-[118px] sm:flex-col sm:gap-y-1">
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
